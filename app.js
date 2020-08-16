const burger = document.querySelector(".burger");
const lines = document.querySelectorAll(".burger div");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navLink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `linksFade 0.3s ease-in forwards ${
        index / 5 + 0.5
      }s`;
    }
  });
  lines.forEach((line) => {
    line.classList.toggle("toggle");
  });
});

navLink.forEach((e) => {
  e.addEventListener("click", function () {
    if (navLinks.classList.contains("active")) {
      navLink.forEach((link) => {
        link.style.animation = "";
      });
      navLinks.classList.remove("active");
      lines.forEach((line) => {
        line.classList.remove("toggle");
      });
    }
  });
});
