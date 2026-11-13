
// ========================================
// ANIMATIONS.JS
// Scroll Reveal Animation
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".reveal");

    // Fallback jika browser tidak mendukung observer
    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {
            element.classList.add("visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    currentObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    elements.forEach((element, index) => {

        element.style.transitionDelay =
            `${Math.min(index % 4, 3) * 80}ms`;

        observer.observe(element);

    });

});
