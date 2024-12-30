# Quản lý Thu Chi

## Giới thiệu

Dự án "Quản lý Thu Chi" là một ứng dụng web đơn giản giúp người dùng theo dõi các khoản thu và chi của mình. Ứng dụng cho phép người dùng nhập dữ liệu, hiển thị danh sách các giao dịch, tính tổng số tiền thu chi, và hỗ trợ chức năng import/export dữ liệu qua file Excel.
![image](https://github.com/user-attachments/assets/0e0b269d-7d14-45ad-987d-e009e9728d2d)


---

## Tính năng chính

1. **Thêm giao dịch:**
   - Người dùng có thể thêm các giao dịch thu hoặc chi, bao gồm mô tả và số tiền.

2. **Xem danh sách giao dịch:**
   - Hiển thị danh sách tất cả các giao dịch với loại, mô tả và số tiền.

3. **Xóa giao dịch:**
   - Người dùng có thể xóa các giao dịch không mong muốn.

4. **Tổng hợp số liệu:**
   - Tự động tính tổng thu và tổng chi, hiển thị dưới dạng số liệu tổng hợp.

5. **Import dữ liệu từ Excel:**
   - Người dùng có thể tải lên file Excel (.xlsx hoặc .xls) để nhập danh sách giao dịch.

6. **Export dữ liệu ra Excel:**
   - Xuất danh sách giao dịch hiện tại thành file Excel để lưu trữ hoặc chia sẻ.

---

## Cách sử dụng

### 1. Chạy ứng dụng
- Chỉ cần mở file `index.html` trong trình duyệt để sử dụng ứng dụng.

### 2. Các thao tác chính
- **Thêm giao dịch:**
  - Điền thông tin vào biểu mẫu, chọn loại giao dịch (Thu/Chi), nhập mô tả và số tiền, sau đó nhấn nút "Thêm".
- **Xóa giao dịch:**
  - Nhấn nút "Xóa" tương ứng với từng giao dịch trong danh sách.
- **Import dữ liệu:**
  - Nhấn nút "Chọn file" và chọn file Excel cần import. Dữ liệu từ file sẽ được thêm vào danh sách.
- **Export dữ liệu:**
  - Nhấn nút "Export to Excel" để tải về file Excel chứa danh sách giao dịch hiện tại.

---

## Cấu trúc dự án

### 1. **`index.html`**
- File HTML chính chứa giao diện người dùng và liên kết với các file CSS, JS.

### 2. **`style.css`**
- Định nghĩa giao diện và phong cách của ứng dụng. (Tùy chọn nếu cần mở rộng sau này).

### 3. **`app.js`**
- Chứa logic xử lý, bao gồm thêm/xóa giao dịch, tính toán tổng, import/export dữ liệu.

---

## Công nghệ sử dụng

- **HTML:** Tạo giao diện cơ bản cho ứng dụng.
- **CSS (TailwindCSS):** Tạo phong cách và bố cục đẹp mắt.
- **JavaScript:** Xử lý logic và tương tác người dùng.
- **SheetJS (XLSX):** Thư viện hỗ trợ đọc/ghi file Excel.

---

## Yêu cầu hệ thống

- Trình duyệt hiện đại có hỗ trợ JavaScript.
- Kết nối internet để tải thư viện TailwindCSS và SheetJS.

---

## Hướng dẫn mở rộng

- **Thêm chức năng lọc dữ liệu:** Cho phép lọc giao dịch theo ngày hoặc loại giao dịch.
- **Thống kê chi tiết:** Biểu đồ trực quan cho thu và chi.
- **Lưu dữ liệu cục bộ:** Sử dụng LocalStorage hoặc IndexedDB để lưu dữ liệu giữa các phiên.

---

## Góp ý và hỗ trợ

Nếu bạn gặp lỗi hoặc có đề xuất, vui lòng gửi email tới: [mchoang98@gmail.com].
