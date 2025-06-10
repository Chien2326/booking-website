// const phone = localStorage.getItem("loggedInUser");
const phone = localStorage.getItem("loggedInUser");
if (phone) {
  document.body.classList.add("logged-in");
}

const authAreas = document.querySelectorAll(".auth-area");

if (phone) {
  const user = JSON.parse(localStorage.getItem(phone));
  authAreas.forEach(authArea => {
    authArea.innerHTML = `
      <div class="user-info">
        <img src="img/picaccount.jpg" class="avatar" alt="User Avatar">
        <span class="user-name">${user.fullname}</span>
        <button class="logout-btn" onclick="logout()">Logout</button>
      </div>
    `;
  });
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}