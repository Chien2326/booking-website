const toggleBtn = document.getElementById("toggleButton");
              const buttonText = document.getElementById("buttonText");
              const arrow = document.getElementById("arrow");
              const hiddenItems = document.querySelectorAll(".specialty-grid .hidden");
              
              let isExpanded = false;
              
              toggleBtn.addEventListener("click", function () {
                isExpanded = !isExpanded;
              
                if (isExpanded) {
                  buttonText.textContent = "Collapse";
                  hiddenItems.forEach(item => {
                    item.style.display = "flex"; // hoặc "block", tùy vào thiết kế của bạn
                  });
                } else {
                  buttonText.textContent = "View All";
                  hiddenItems.forEach(item => {
                    item.style.display = "none";
                  });
                }
              });
            
              // Khởi tạo: ẩn tất cả phần tử hidden ban đầu
              hiddenItems.forEach(item => {
                item.style.display = "none";
              });