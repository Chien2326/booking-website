const slider = document.querySelector('.ad-slider');
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;
        const totalRealSlides = dots.length;

        function showSlide(index) {
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(-${index * 100}%)`;
            updateDots(index);
        }

        function updateDots(index) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index % totalRealSlides].classList.add('active');
        }

        function nextSlide() {
            currentIndex++;
            showSlide(currentIndex);

            if (currentIndex === totalRealSlides) {
                
                setTimeout(() => {
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0%)';
                    currentIndex = 0;
                }, 500);
            }
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                currentIndex = idx;
                showSlide(currentIndex);
            });
        });

        setInterval(nextSlide, 3000);