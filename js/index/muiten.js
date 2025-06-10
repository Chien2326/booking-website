
  // Lấy tất cả các dropdown-toggle
  // document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  //   toggle.addEventListener('click', function () {
  //     const icon = this.querySelector('.icon-rotate');
  //     icon.classList.toggle('rotated');
  //   });
  // });

  
  // Gộp cả hai loại phần tử: dropdown-toggle và arrow
  document.querySelectorAll('.dropdown-toggle, .arrow').forEach(function(element) {
    element.addEventListener('click', function () {
      const icon = this.querySelector('.icon-rotate');
      if (icon) icon.classList.toggle('rotated');
    });
  });