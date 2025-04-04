let dropdown = document.querySelector(".header-nav ul li");
let dropdownMenu = document.querySelector(".header-nav ul li ul")

function toggleDropdown() {
    document.getElementById("has-submenue").classList.toggle("show");
} 

document.addEventListener("DOMContentLoaded", () => {
    dropdown.addEventListener("mouseenter", () => {
        dropdownMenu.classList.add("show");
    });
    
    dropdown.addEventListener("mouseleave", () => {
        dropdownMenu.classList.remove("show");
    });
    
    dropdown.addEventListener("click", toggleDropdown);
});




