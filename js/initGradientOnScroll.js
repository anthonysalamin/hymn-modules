/**
 * HYMN | gradient on scroll v1
 * @build 13.09.25 @updated 23:14 PHT
 */

const DEFAULT_OPTIONS = {
    target: "[data-id='header-gradient']",
};

export function initGradientOnScroll(options = DEFAULT_OPTIONS) {
    const { target } = options;

    // Check for gsap + ScrollTrigger
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.warn("GSAP or ScrollTrigger not available, skipping gradient handling");
        return;
    }

    const element = document.querySelector(target);
    if (!element) {
        console.log("skipping gradient handling");
        return;
    }

    gsap.set(target, { opacity: 0 });
    gsap.to(target, {
        opacity: 1,
        duration: 0.45,
        scrollTrigger: {
            trigger: document.body,
            start: "20px top",
            toggleActions: "play reverse play reverse",
            markers: false,
        },
    });
}