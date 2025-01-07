const toggler = document.getElementById("navbar-toggler");
const links = document.getElementById("navbar-links");

toggler.addEventListener("click", () => {
  links.classList.toggle("show");
});
