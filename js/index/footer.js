    document.addEventListener('DOMContentLoaded', function () {
      const titles = document.querySelectorAll('.footer-title');
      titles.forEach(function (title) {
        title.addEventListener('click', function () {
          this.classList.toggle('active');
        });
      });
    });