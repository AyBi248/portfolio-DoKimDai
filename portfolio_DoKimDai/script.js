// Mở / đóng menu
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Chức năng Xem thêm / Thu gọn
const readMoreButtons = document.querySelectorAll(".read-more");
readMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const text = button.previousElementSibling;
    text.classList.toggle("expanded");
    button.textContent = text.classList.contains("expanded") ? "Thu gọn" : "Xem thêm";
  });
});