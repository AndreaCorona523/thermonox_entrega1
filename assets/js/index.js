const body = document.querySelector("body");
const cover = document.getElementById("cover");
const menuButton = document.getElementById("menu-icon");

const toggleMenu = () => {
  body.classList.toggle("body--offcanvas");
  cover.classList.toggle("cover--show");
}

menuButton.addEventListener("click", toggleMenu);
cover.addEventListener("click",toggleMenu);