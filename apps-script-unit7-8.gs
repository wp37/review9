/**
 * ========================================================
 * APPS SCRIPT - LƯU KẾT QUẢ QUIZ UNIT 7 & 8 - GLOBAL 9
 * ========================================================
 * 
 * HƯỚNG DẪN CÀI ĐẶT:
 * 
 * 1. Mở Google Sheets và tạo một sheet mới
 * 2. Đặt tên sheet: "Quiz Unit 7-8 Global 9"
 * 3. Vào Extensions > Apps Script
 * 4. Xóa code mặc định và dán toàn bộ code này vào
 * 5. Lưu file (Ctrl+S)
 * 6. Chạy hàm setupHeaders() một lần để tạo header
 * 7. Click "Deploy" > "New deployment"
 * 8. Chọn loại: "Web app"
 * 9. Cấu hình:
 *    - Description: Quiz Unit 7-8 API
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 10. Click "Deploy"
 * 11. Cấp quyền khi được yêu cầu
 * 12. Copy URL và dán vào file HTML (thay thế YOUR_GOOGLE_SCRIPT_URL_HERE)
 * 
 */

// Xử lý POST request từ quiz
function doPost(e) {
  try {
    // Parse dữ liệu JSON
    const data = JSON.parse(e.postData.contents);
    
    // Mở spreadsheet hiện tại
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Thêm dữ liệu vào dòng mới
    sheet.appendRow([
      data.timestamp,       // A: Thời gian nộp
      data.name,            // B: Họ và tên
      data.class,           // C: Lớp
      data.parentPhone,     // D: SĐT Cha/Mẹ
      data.score,           // E: Điểm
      data.correctCount,    // F: Số câu đúng
      data.totalQuestions,  // G: Tổng số câu
      data.timeTaken,       // H: Thời gian làm bài
      data.details          // I: Chi tiết
    ]);
    
    // Format cột điểm với màu sắc
    const lastRow = sheet.getLastRow();
    const scoreCell = sheet.getRange(lastRow, 5); // Cột E (Điểm)
    const score = data.score;
    
    // Đặt màu nền dựa trên điểm số
    if (score >= 8) {
      scoreCell.setBackground('#4ade80'); // Xanh lá - Giỏi
      scoreCell.setFontColor('#ffffff');
      scoreCell.setFontWeight('bold');
    } else if (score >= 6.5) {
      scoreCell.setBackground('#60a5fa'); // Xanh dương - Khá
      scoreCell.setFontColor('#ffffff');
      scoreCell.setFontWeight('bold');
    } else if (score >= 5) {
      scoreCell.setBackground('#fbbf24'); // Vàng - Trung bình
      scoreCell.setFontColor('#000000');
      scoreCell.setFontWeight('bold');
    } else {
      scoreCell.setBackground('#f87171'); // Đỏ - Yếu
      scoreCell.setFontColor('#ffffff');
      scoreCell.setFontWeight('bold');
    }
    
    // Format số câu đúng
    const correctCell = sheet.getRange(lastRow, 6);
    correctCell.setHorizontalAlignment('center');
    
    // Format tổng số câu
    const totalCell = sheet.getRange(lastRow, 7);
    totalCell.setHorizontalAlignment('center');
    
    // Trả về response thành công
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Dữ liệu đã được lưu thành công!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Trả về response lỗi
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Xử lý GET request (để test)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'online',
      message: 'Quiz Unit 7-8 API đang hoạt động!',
      version: '2.0',
      quiz: 'Global 9 - Unit 7 & 8'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Hàm khởi tạo header (chạy 1 lần)
function setupHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Kiểm tra nếu dòng 1 còn trống
  const firstCell = sheet.getRange('A1').getValue();
  if (firstCell === '') {
    // Thêm headers
    const headers = [
      'Thời gian nộp',
      'Họ và tên', 
      'Lớp',
      'SĐT Cha/Mẹ',
      'Điểm',
      'Số câu đúng',
      'Tổng số câu',
      'Thời gian làm bài',
      'Chi tiết'
    ];
    
    // Ghi headers vào dòng 1
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format header
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#4f46e5');
    headerRange.setFontColor('white');
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    headerRange.setVerticalAlignment('middle');
    
    // Đặt độ rộng cột
    sheet.setColumnWidth(1, 150);  // Thời gian nộp
    sheet.setColumnWidth(2, 200);  // Họ và tên
    sheet.setColumnWidth(3, 80);   // Lớp
    sheet.setColumnWidth(4, 120);  // SĐT
    sheet.setColumnWidth(5, 80);   // Điểm
    sheet.setColumnWidth(6, 100);  // Số câu đúng
    sheet.setColumnWidth(7, 100);  // Tổng số câu
    sheet.setColumnWidth(8, 130);  // Thời gian làm bài
    sheet.setColumnWidth(9, 600);  // Chi tiết
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    // Đặt chiều cao dòng header
    sheet.setRowHeight(1, 40);
    
    Logger.log('✅ Headers đã được tạo thành công!');
    SpreadsheetApp.getUi().alert('✅ Headers đã được tạo thành công!\n\nBạn có thể deploy Web App ngay bây giờ.');
  } else {
    Logger.log('⚠️ Headers đã tồn tại.');
    SpreadsheetApp.getUi().alert('⚠️ Headers đã tồn tại.\n\nKhông cần chạy lại hàm này.');
  }
}

// Hàm test gửi dữ liệu mẫu
function testAddData() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toLocaleString('vi-VN'),
        name: 'Nguyễn Văn A',
        class: '9A1',
        parentPhone: '0912345678',
        score: 8.5,
        correctCount: 17,
        totalQuestions: 20,
        timeTaken: '15:30',
        details: JSON.stringify([
          {question: 1, unit: 7, category: 'vocabulary', userAnswer: 'Annual', correctAnswer: 'Annual', isCorrect: true},
          {question: 2, unit: 7, category: 'vocabulary', userAnswer: 'urgent', correctAnswer: 'urgent', isCorrect: true},
          {question: 3, unit: 7, category: 'vocabulary', userAnswer: 'Paradise', correctAnswer: 'Paradise', isCorrect: true}
        ])
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
  SpreadsheetApp.getUi().alert('✅ Test thành công!\n\nKiểm tra sheet để xem dữ liệu mẫu.');
}

// Hàm phân tích kết quả
function analyzeResults() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  if (lastRow <= 1) {
    SpreadsheetApp.getUi().alert('⚠️ Chưa có dữ liệu để phân tích!');
    return;
  }
  
  // Lấy dữ liệu điểm (cột E)
  const scores = sheet.getRange(2, 5, lastRow - 1, 1).getValues();
  
  let total = 0;
  let count = 0;
  let excellent = 0; // >= 8
  let good = 0;      // >= 6.5
  let average = 0;   // >= 5
  let weak = 0;      // < 5
  
  scores.forEach(row => {
    const score = parseFloat(row[0]);
    total += score;
    count++;
    
    if (score >= 8) excellent++;
    else if (score >= 6.5) good++;
    else if (score >= 5) average++;
    else weak++;
  });
  
  const avgScore = (total / count).toFixed(2);
  
  const message = `
📊 PHÂN TÍCH KẾT QUẢ QUIZ UNIT 7-8

Tổng số học sinh: ${count}
Điểm trung bình: ${avgScore}

Phân loại:
🏆 Giỏi (≥ 8.0): ${excellent} học sinh (${(excellent/count*100).toFixed(1)}%)
🌟 Khá (≥ 6.5): ${good} học sinh (${(good/count*100).toFixed(1)}%)
👍 Trung bình (≥ 5.0): ${average} học sinh (${(average/count*100).toFixed(1)}%)
💪 Yếu (< 5.0): ${weak} học sinh (${(weak/count*100).toFixed(1)}%)
  `;
  
  SpreadsheetApp.getUi().alert(message);
  Logger.log(message);
}
