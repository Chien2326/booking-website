const menuIcon = document.querySelector('.menu-icon');
      const sidebar = document.querySelector('.mobile-sidebar');
      const overlay = document.querySelector('.overlay');
      const closeBtn = document.querySelector('.close-btn');

      menuIcon.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
      });

      overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      });

      closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      });

    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const parent = toggle.parentElement;
        parent.classList.toggle('active');
      });
    });
