document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const repassword = document.getElementById('repassword').value.trim();
  const messageEl = document.getElementById('register-message');

  if (password !== repassword) {
    messageEl.textContent = "Re-entered password does not match!";
    messageEl.style.color = "red";
    return;
  }

  if (localStorage.getItem(phone)) {
    messageEl.textContent = "Phone number is already registered!";
    messageEl.style.color = "red";
    return;
  }

  const userData = { fullname, phone, password };
  localStorage.setItem(phone, JSON.stringify(userData));

  messageEl.textContent = "Registration successful! Redirecting to login page...";
  messageEl.style.color = "green";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500); // đợi 1.5 giây để người dùng thấy thông báo
});
