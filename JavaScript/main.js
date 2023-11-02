// ************************************
// Toggle hamburger menu
// ************************************

const hamburgerIcon = document.querySelector(".hamburger_icon");
const navLinks = document.querySelectorAll("header nav ul li a");
let isMenuOpen = false;

hamburgerIcon.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen; // Odwróć stan flagi

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