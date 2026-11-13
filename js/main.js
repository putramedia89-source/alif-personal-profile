
// ========================================
// MAIN.JS
// Personal Profile - Alif
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const loader = document.getElementById("loader");

    // LOADER
    const hideLoader = () => {
        if (loader) {
            loader.classList.add("done");
        }
    };

    // Jangan biarkan loader menutupi halaman jika ada resource lambat
    window.addEventListener("load", hideLoader, { once: true });
    setTimeout(hideLoader, 2500);

    // MOBILE MENU
    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });

        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });

        });
    }

    // ACTIVE NAVIGATION
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("#nav-menu a");

    function updateActiveNavigation() {

        let current = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current
            );

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();

    console.log("Personal Profile Alif berhasil dimuat.");

});
