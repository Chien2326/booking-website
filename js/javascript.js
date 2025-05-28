let currentIndex = 0;
const slides = document.querySelectorAll('.ad-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function changeSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Đảm bảo tuần hoàn
    const offset = currentIndex * 100 / totalSlides;  // Di chuyển từng slide theo chiều rộng của nó
    document.querySelector('.ad-slider').style.transform = `translateX(-${offset}%)`; // Di chuyển slider
    dots.forEach(dot => dot.classList.remove('active')); // Xóa active khỏi tất cả các dot
    dots[currentIndex].classList.add('active'); // Thêm active vào dot hiện tại
}

// Auto slide every 3 seconds
setInterval(changeSlide, 3000);

// Manually click on a dot to go to a specific slide
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        changeSlide();
    });
});






// 



const serviceCards = document.getElementById('serviceCards');
        const leftButton = document.querySelector('.scroll-button.left');
        const rightButton = document.querySelector('.scroll-button.right');
    
        function updateButtonVisibility() {
            // Nếu scrollLeft > 0 thì hiện nút trái
            if (serviceCards.scrollLeft > 0) {
                leftButton.style.display = 'block';
            } else {
                leftButton.style.display = 'none';
            }
    
            // Nếu scroll đến hết thì ẩn nút phải
            if (serviceCards.scrollLeft + serviceCards.clientWidth >= serviceCards.scrollWidth - 5) {
                rightButton.style.display = 'none';
            } else {
                rightButton.style.display = 'block';
            }
        }
    
        function scrollLeft() {
            serviceCards.scrollBy({ left: -300, behavior: 'smooth' });
            setTimeout(updateButtonVisibility, 300); // đợi cuộn xong mới kiểm tra lại
        }
    
        function scrollRight() {
            serviceCards.scrollBy({ left: 300, behavior: 'smooth' });
            setTimeout(updateButtonVisibility, 300);
        }
    
        // Khi load trang
        window.onload = function() {
            updateButtonVisibility();
        }








        