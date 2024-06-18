document.addEventListener("DOMContentLoaded", () => {
 const hamburger = document.querySelector(".hamburger");
 const navlinks = document.querySelector(".navlinks");

 hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("active");
 })
})