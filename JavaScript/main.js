// ************************************
// Toggle hamburger menu
// ************************************

const hamburgerIcon = document.querySelector(".hamburger_icon");
const navLinks = document.querySelectorAll("header nav ul li a");
let isMenuOpen = false;

document.addEventListener('DOMContentLoaded', function() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'none'; 
});

hamburgerIcon.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen; 
    if (isMenuOpen) {
        navLinks.forEach(link => {
            link.style.display = "block"; // Pokaż linki
            link.style.paddingBottom = "5px";
        });
    } else {
        navLinks.forEach(link => {
            link.style.display = "none"; // Ukryj linki
        });
    }
    if ($(window).width() > 576) {
        navLinks.forEach(link => {
            link.style.display = "none"; // Ukryj linki
        });
     }
});

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const scrollToTop = document.getElementById("scrollToTop");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; // Dla wsparcia starszych przeglądarek
    document.documentElement.scrollTop = 0; // Dla nowoczesnych przeglądarek
  }