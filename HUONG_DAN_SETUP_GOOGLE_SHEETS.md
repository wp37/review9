# 📊 HƯỚNG DẪN SETUP GOOGLE SHEETS CHO QUIZ UNIT 7-8

## 🎯 BƯỚC 1: TẠO GOOGLE SHEETS

1. Truy cập [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** để tạo sheet mới
3. Đặt tên sheet: **"Quiz Unit 7-8 Global 9"**

---

## 💻 BƯỚC 2: THÊM APPS SCRIPT

### 2.1. Mở Apps Script Editor

1. Trong Google Sheets, click menu **Extensions** > **Apps Script**
2. Một tab mới sẽ mở ra với code editor

### 2.2. Dán code

1. **Xóa toàn bộ** code mặc định (function myFunction...)
2. Mở file `apps-script-unit7-8.gs` trong folder
3. **Copy toàn bộ** code trong file đó
4. **Paste** vào Apps Script editor
5. Click **💾 Save** (hoặc Ctrl+S)
6. Đặt tên project: **"Quiz Unit 7-8 API"**

---

## ⚙️ BƯỚC 3: CHẠY HÀM SETUP

### 3.1. Chạy setupHeaders()

1. Ở thanh công cụ trên, chọn function: **setupHeaders**
2. Click nút **▶️ Run**
3. Lần đầu chạy sẽ yêu cầu cấp quyền:
   - Click **Review permissions**
   - Chọn tài khoản Google của bạn
   - Click **Advanced** > **Go to Quiz Unit 7-8 API (unsafe)**
   - Click **Allow**
4. Chờ chạy xong, sẽ hiện thông báo: **"✅ Headers đã được tạo thành công!"**

### 3.2. Kiểm tra kết quả

Quay lại tab Google Sheets, bạn sẽ thấy:

- Dòng 1 có 9 cột header với màu tím (#4f46e5)
- Các cột đã được set độ rộng phù hợp
- Header row đã được freeze

---

## 🚀 BƯỚC 4: DEPLOY WEB APP

### 4.1. Tạo deployment

1. Trong Apps Script editor, click **Deploy** > **New deployment**
2. Click biểu tượng **⚙️ Settings** bên cạnh "Select type"
3. Chọn **Web app**

### 4.2. Cấu hình deployment

Điền thông tin như sau:

| Trường | Giá trị |
|--------|---------|
| **Description** | Quiz Unit 7-8 API |
| **Execute as** | **Me** (<your-email@gmail.com>) |
| **Who has access** | **Anyone** |

⚠️ **LƯU Ý**: Phải chọn "Anyone" để quiz có thể gửi dữ liệu về

### 4.3. Deploy

1. Click **Deploy**
2. Sẽ hiện popup xác nhận quyền, click **Authorize access**
3. Chọn tài khoản Google
4. Click **Allow**

### 4.4. Copy URL

1. Sau khi deploy thành công, sẽ hiện popup với **Web app URL**
2. URL có dạng: `https://script.google.com/macros/s/AKfycby.../exec`
3. Click **📋 Copy** để copy URL này

---

## 🔗 BƯỚC 5: CẬP NHẬT FILE HTML

### 5.1. Mở file quiz

Mở file `quiz-global9-unit7-8.html` bằng text editor

### 5.2. Tìm và thay thế

Tìm dòng (khoảng dòng 365):

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```

Thay bằng:

```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
```

*(Paste URL bạn đã copy ở bước 4.4)*

### 5.3. Lưu file

Lưu file HTML (Ctrl+S)

---

## ✅ BƯỚC 6: TEST THỬ

### 6.1. Test bằng Apps Script

1. Quay lại Apps Script editor
2. Chọn function: **testAddData**
3. Click **▶️ Run**
4. Kiểm tra Google Sheets, sẽ thấy 1 dòng dữ liệu mẫu được thêm vào

### 6.2. Test bằng quiz thực tế

1. Mở file `quiz-global9-unit7-8.html` bằng trình duyệt
2. Làm thử 1 bài quiz
3. Nộp bài
4. Kiểm tra Google Sheets xem dữ liệu có được lưu không

---

## 📊 CẤU TRÚC DỮ LIỆU TRONG SHEET

| Cột | Tên | Ví dụ | Ghi chú |
|-----|-----|-------|---------|
| A | Thời gian nộp | 05/02/2026, 19:15:30 | Tự động |
| B | Họ và tên | Nguyễn Văn A | |
| C | Lớp | 9A1 | |
| D | SĐT Cha/Mẹ | 0912345678 | Dùng để kiểm tra làm 1 lần |
| E | Điểm | 8.5 | Có màu sắc tự động |
| F | Số câu đúng | 17 | |
| G | Tổng số câu | 20 | |
| H | Thời gian làm bài | 15:30 | Phút:Giây |
| I | Chi tiết | JSON | Chi tiết từng câu |

### Màu sắc cột Điểm (E)

- 🟢 **Xanh lá** (≥ 8.0): Giỏi
- 🔵 **Xanh dương** (≥ 6.5): Khá  
- 🟡 **Vàng** (≥ 5.0): Trung bình
- 🔴 **Đỏ** (< 5.0): Yếu

---

## 📈 PHÂN TÍCH KẾT QUẢ

### Chạy hàm analyzeResults()

1. Trong Apps Script, chọn function: **analyzeResults**
2. Click **▶️ Run**
3. Sẽ hiện popup với thống kê:
   - Tổng số học sinh
   - Điểm trung bình
   - Phân loại theo mức điểm
   - Tỷ lệ % từng loại

---

## 🔧 XỬ LÝ SỰ CỐ

### Lỗi: "Authorization required"

**Nguyên nhân**: Chưa cấp quyền cho Apps Script  
**Giải pháp**: Làm lại BƯỚC 3.1, nhớ click "Allow"

### Lỗi: "Exception: The coordinates or dimensions of the range are invalid"

**Nguyên nhân**: Sheet chưa có header  
**Giải pháp**: Chạy lại hàm `setupHeaders()`

### Không nhận được dữ liệu từ quiz

**Kiểm tra**:

1. URL trong file HTML có đúng không?
2. Deploy có chọn "Anyone" không?
3. Mở Console (F12) trong browser xem có lỗi không?

### Muốn reset lại sheet

1. Xóa toàn bộ dữ liệu (giữ lại dòng header)
2. Hoặc tạo sheet mới và làm lại từ đầu

---

## 🔄 CẬP NHẬT SAU NÀY

Nếu bạn sửa code Apps Script:

1. Lưu code (Ctrl+S)
2. Click **Deploy** > **Manage deployments**
3. Click **✏️ Edit** (biểu tượng bút chì)
4. Thay đổi **Version** thành **New version**
5. Click **Deploy**
6. **KHÔNG CẦN** thay đổi URL trong file HTML

---

## 💡 MẸO HAY

### Sao lưu dữ liệu

- File > Make a copy
- Hoặc File > Download > Excel (.xlsx)

### Chia sẻ với đồng nghiệp

- Click **Share** ở góc trên
- Thêm email, chọn quyền "Viewer" hoặc "Editor"

### Tạo biểu đồ

1. Chọn cột Điểm (E)
2. Insert > Chart
3. Chọn loại biểu đồ phù hợp

---

## 📞 HỖ TRỢ

Nếu gặp khó khăn, liên hệ:

**Thầy Võ Ngọc Tùng**

- 💬 Zalo: [0914666040](https://zalo.me/0914666040)
- 📘 Facebook: [facebook.com/vongoctungthcs](https://facebook.com/vongoctungthcs)

---

© 2026 Ezteach - Hệ thống quiz thông minh
