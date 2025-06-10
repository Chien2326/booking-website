document.getElementById("booking-link").addEventListener("click", function(e) {
  const phone = localStorage.getItem("loggedInUser");

  if (!phone) {
    e.preventDefault(); // Chặn chuyển trang ngay
    localStorage.setItem("redirectAfterLogin", "appointment.html"); // Lưu trang đích
    // Chuyển hướng đến trang đăng nhập
    window.location.href = "login.html";
  }
  // Nếu đã đăng nhập thì <a> sẽ chuyển đến appointment.html như bình thường
});