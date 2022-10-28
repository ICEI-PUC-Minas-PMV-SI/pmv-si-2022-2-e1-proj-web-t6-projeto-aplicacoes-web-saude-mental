const menuHamburguer = document.querySelector(".menu-hamburguer");
const navMenu = document.querySelector(".cabecalho-menu");

menuHamburguer.addEventListener("click", () => {
  menuHamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});
