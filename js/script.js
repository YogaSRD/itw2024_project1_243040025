// Toggle the navbar menu
const toggler = document.getElementById("navbar-toggler");
const links = document.getElementById("navbar-links");

// Menambahkan event listener untuk tombol hamburger
toggler.addEventListener("click", () => {
  links.classList.toggle("show"); // Toggle kelas "show" pada navbar-links
});
