window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
const toggleMenuBtn = document.getElementById("toggleMenu");
const navMenu = document.getElementById("navMenu");
const closeNavBtn = document.getElementById("closeNav");
toggleMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
closeNavBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.classList.toggle("bx-sun");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    darkToggle.classList.add("bx-sun");
  }
});
const faders = document.querySelectorAll('.fade-in-up');
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
