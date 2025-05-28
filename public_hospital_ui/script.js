
function showDetails(index) {
  const details = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Logo_BV_115.png",
      text: "It is a First-Class General Hospital and the final referral level under the Ho Chi Minh City Department of Health..."
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Singapore_General_Hospital_logo.svg",
      text: "Singapore General Hospital is a leading medical center in Asia with decades of excellence in patient care, research, and education..."
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Logo_BV_115.png",
      text: "It is a First-Class General Hospital and the final referral level under the Ho Chi Minh City Department of Health..."
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Singapore_General_Hospital_logo.svg",
      text: "Singapore General Hospital is a leading medical center in Asia with decades of excellence in patient care, research, and education..."
    }
  ];
  document.querySelector(".big-logo").src = details[index].logo;
  document.getElementById("detail-text").innerText = details[index].text;
}
