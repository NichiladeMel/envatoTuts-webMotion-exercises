let isMenuOpen = false;

let toggleNav = function() {
    let getDropdown = document.querySelector(".header-nav ul li");
    let getDropdownUL = document.querySelector(".header-nav ul li ul");

    if (isMenuOpen === false) {
        getDropdownUL.style.display = "block";
        getDropdownUL.style.visibility = "visible";
        getDropdownUL.style.opacity = "1";

        isMenuOpen = true;
    } else {
        getDropdownUL.style.display = "none";
        getDropdownUL.style.visibility = "hidden";
        getDropdownUL.style.opacity = "0";

        isMenuOpen = false;
    }
}


