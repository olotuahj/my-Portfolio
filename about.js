document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");

    hamburger.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    window.addEventListener("scroll", () => {
        mobileMenu.classList.remove("active");
    });

    const menuLinks = document.querySelectorAll(".mobile-menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    // ABOUT IMAGE LOADER
    const aboutImage = document.querySelector(".about-image img");

    if (aboutImage) {

        if (aboutImage.complete) {
            aboutImage.classList.add("loaded");
        } else {
            aboutImage.addEventListener("load", () => {
                aboutImage.classList.add("loaded");
            });
        }

    }

});