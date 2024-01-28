var backToTopButton = document.getElementById("back-to-top");

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");

// Back to top button functionality
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.disolay = "none";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
