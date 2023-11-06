const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
console.log(btnNavEl);
btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
