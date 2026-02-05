# 📚 HƯỚNG DẪN QUIZ ÔN TẬP UNIT 7 & 8 - GLOBAL 9

## 📋 Thông tin bài kiểm tra

### Nội dung

- **Unit 7**: Natural Wonders of the World
- **Unit 8**: Tourism
- **Tổng số câu**: 20 câu trắc nghiệm
  - Unit 7: 5 câu từ vựng + 5 câu ngữ pháp
  - Unit 8: 5 câu từ vựng + 5 câu ngữ pháp

### Nguồn câu hỏi

Tất cả câu hỏi được lấy từ **NotebookLM** dựa trên:

- **A Closer Look 1** (Vocabulary)
- **A Closer Look 2** (Grammar)
- **Looking Back**

### Điểm ngữ pháp chính

- **Unit 7**: Reported speech (Yes/No questions)
- **Unit 8**: Relative pronouns (who, which, whose)

---

## ⚙️ CẤU HÌNH BÀI KIỂM TRA

### 1. Thời gian làm bài

- **Thời gian**: 20 phút
- **Thời gian mở**: 19:00 - Thứ Bảy, 08/02/2026
- **Thời gian đóng**: 19:20 - Thứ Bảy, 08/02/2026

### 2. Quy định làm bài

⚠️ **QUAN TRỌNG**: Mỗi số điện thoại phụ huynh chỉ được sử dụng để làm bài **1 LẦN DUY NHẤT**

- Hệ thống sử dụng `localStorage` để lưu trạng thái
- Khi học sinh nhập số điện thoại đã làm bài, sẽ hiển thị thông báo:
  - Tên học sinh đã làm
  - Lớp
  - Điểm số
  - Thời gian làm bài
- **Không thể làm lại** sau khi đã nộp bài

### 3. Cách thay đổi thời gian

Mở file `quiz-global9-unit7-8.html` và tìm dòng:

```javascript
const OPEN_TIME = new Date('2026-02-08T19:00:00+07:00');
const CLOSE_TIME = new Date('2026-02-08T19:20:00+07:00');
```

Thay đổi theo format: `YYYY-MM-DDTHH:MM:SS+07:00`

### 4. Kết nối Google Sheets

Thay đổi dòng:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

Bằng URL Google Apps Script của bạn (xem file `apps-script-code.gs`)

---

## 📊 DỮ LIỆU LƯU VÀO GOOGLE SHEETS

Mỗi lần học sinh nộp bài, hệ thống sẽ gửi các thông tin sau về Google Sheets:

| Cột | Tên cột | Mô tả | Ví dụ |
|-----|---------|-------|-------|
| A | Thời gian nộp | Thời điểm nộp bài | 05/02/2026, 19:15:30 |
| B | Họ và tên | Tên học sinh | Nguyễn Văn A |
| C | Lớp | Lớp học | 9A1 |
| D | SĐT Cha/Mẹ | Số điện thoại phụ huynh | 0912345678 |
| E | Điểm | Điểm số (thang 10) | 8.5 |
| F | Số câu đúng | Số câu trả lời đúng | 17 |
| G | Tổng số câu | Tổng số câu hỏi | 20 |
| H | Thời gian làm bài | Thời gian thực tế làm bài | 15:30 |
| I | Chi tiết | JSON chi tiết từng câu | [{"question":1,"unit":7,...}] |

### Màu sắc tự động

- **Xanh lá** (≥ 8.0): Giỏi
- **Xanh dương** (≥ 6.5): Khá
- **Vàng** (≥ 5.0): Trung bình
- **Đỏ** (< 5.0): Yếu

### Chi tiết từng câu (Cột I)

Mỗi câu hỏi được lưu với thông tin:

- `question`: Số thứ tự câu hỏi (1-20)
- `unit`: Unit 7 hoặc 8
- `category`: "vocabulary" hoặc "grammar"
- `userAnswer`: Đáp án học sinh chọn
- `correctAnswer`: Đáp án đúng
- `isCorrect`: true/false

---

## 📝 CHI TIẾT CÂU HỎI

### UNIT 7 - VOCABULARY (Câu 1-5)

1. Annual (happening once every year)
2. Urgent (cấp thiết)
3. Paradise (thiên đường)
4. Hesitation (sự do dự)
5. Permit (cho phép)

### UNIT 7 - GRAMMAR (Câu 6-10)

Tập trung vào **Reported speech: Yes/No questions**

- Sử dụng if/whether
- Lùi thì động từ
- Thay đổi đại từ và trạng từ

### UNIT 8 - VOCABULARY (Câu 11-15)

1. Package holiday (kỳ nghỉ trọn gói)
2. Trip itinerary (lịch trình chuyến đi)
3. Homestay (ở cùng gia đình địa phương)
4. Ruinous site (tàn tích)
5. Fixed itinerary (lịch trình cố định)

### UNIT 8 - GRAMMAR (Câu 16-20)

Tập trung vào **Relative pronouns**

- **who**: thay thế cho người (chủ ngữ)
- **which**: thay thế cho vật (chủ ngữ)
- **whose**: chỉ sở hữu

---

## 🚀 TRIỂN KHAI

### Cách 1: Mở trực tiếp

1. Mở file `quiz-global9-unit7-8.html` bằng trình duyệt
2. Học sinh làm bài ngay trên máy tính

### Cách 2: Deploy lên Vercel

1. Cập nhật file `vercel.json` (thêm route mới)
2. Push lên GitHub
3. Vercel sẽ tự động deploy
4. Học sinh truy cập qua link: `https://your-domain.vercel.app/unit7-8`

---

## 📊 KẾT QUẢ

### Thông tin được lưu

- Họ tên học sinh
- Lớp
- Số điện thoại phụ huynh
- Điểm số (thang 10)
- Thời gian nộp bài

### Thông báo kết quả

- Hiển thị ngay sau khi nộp bài
- Gửi về số điện thoại phụ huynh (nếu đã cấu hình Google Sheets)
- Đáp án chi tiết sẽ được giáo viên công bố sau

---

## 💡 LƯU Ý

1. **Kiểm tra thời gian**: Đảm bảo thời gian mở/đóng phù hợp với lịch học
2. **Test trước**: Làm thử 1 lần để kiểm tra Google Sheets hoạt động
3. **Backup**: Lưu file gốc trước khi chỉnh sửa
4. **Hướng dẫn học sinh**:
   - Chuẩn bị số điện thoại phụ huynh
   - Vào đúng giờ (chỉ có 20 phút để vào làm bài)
   - Kiểm tra kết nối internet

---

## 📞 HỖ TRỢ

**Thầy Võ Ngọc Tùng**

- 💬 Zalo: [0914666040](https://zalo.me/0914666040)
- 📘 Facebook: [facebook.com/vongoctungthcs](https://facebook.com/vongoctungthcs)

---

© 2026 Ezteach - Học tập thông minh, hiệu quả cao
