/**
 * HYMN | initGradientOnScroll
 * @build 13.09.25 @updated 23:36 PHT
 * Fades in a header gradient as the page is scrolled using GSAP ScrollTrigger.
 */

export function initGradientOnScroll() {
    const target = "[data-id='header-gradient']";

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