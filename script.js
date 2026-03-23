const menuButton = document.querySelector(".menu-box");
const menuOverlay = document.querySelector(".menu-overlay");
const closeMenu = document.getElementById("closeMenu");

menuButton.addEventListener("click", () => {
  menuOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});