document.addEventListener("DOMContentLoaded", () => {

    /* ================= SELECT ELEMENTS ================= */

    const hamburger = document.getElementById("hamburger");

    const mobileMenu = document.getElementById("mobileMenu");

    const closeMenu = document.getElementById("closeMenu");


    /* ================= OPEN MENU ================= */

    hamburger.addEventListener("click", () => {

        mobileMenu.classList.add("active");

    });


    /* ================= CLOSE MENU ================= */

    closeMenu.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });


    /* ================= CLOSE MENU WHEN SCROLLING ================= */

    window.addEventListener("scroll", () => {

        mobileMenu.classList.remove("active");

    });


    /* ================= CLOSE MENU WHEN A LINK IS CLICKED ================= */

    const menuLinks = document.querySelectorAll(".mobile-menu a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

});