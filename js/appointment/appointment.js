  document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn form submit mặc định (reload trang)
    
    // Có thể thêm kiểm tra form hợp lệ nếu cần

    // Hiển thị thông báo thành công
    document.getElementById("successMessage").style.display = "block";

    // (Tùy chọn) Reset form nếu muốn:
    this.reset();
  });