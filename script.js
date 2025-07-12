// Show/hide back-to-top button
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggleBtn.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
