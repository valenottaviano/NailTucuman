const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLink.forEach((e) => {
  e.addEventListener("click", function () {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});
