document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const phone = document.getElementById('login-phone').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const messageEl = document.getElementById('login-message');

  const storedUser = localStorage.getItem(phone);
  if (!storedUser) {
    messageEl.textContent = "Account does not exist!";
    messageEl.style.color = "red";
    return;
  }

  const userData = JSON.parse(storedUser);
  if (userData.password !== password) {
    messageEl.textContent = "Password is incorrect!";
    messageEl.style.color = "red";
    return;
  }

  localStorage.setItem("loggedInUser", phone);

  messageEl.textContent = "Login successful! Redirecting...";
  messageEl.style.color = "green";

  const redirectUrl = localStorage.getItem("redirectAfterLogin") || "index.html";
  localStorage.removeItem("redirectAfterLogin");

  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 1000); // đợi 1 giây để hiển thị thông báo
});
