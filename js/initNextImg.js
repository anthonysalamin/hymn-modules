/**
 * HYMN | initNextImg
 * @build 16.09.24 @updated 23:59 PHT
 * Animates the “next” image into view with a scroll-triggered upward movement and fade-in effect.
 */

export function initNextImg() {
    const IMAGE_SELECTOR = '[data-id="next__img-wrap"]';
    const EASING = "power2.out";
    const PRODUCTION = true;

    // Skip if element not found
    const imageEl = document.querySelector(IMAGE_SELECTOR);
    if (!imageEl) {
        // console.log("skipping next image animation");
        return;
    }

    // Helper: get effective height including margins
    function getEffectiveHeight(selector) {
        const el = document.querySelector(selector);
        const style = window.getComputedStyle(el);
        const height = el.offsetHeight;
        const marginTop = parseFloat(style.marginTop);
        const marginBottom = parseFloat(style.marginBottom);
        return height + marginTop + marginBottom;
    }

    // Set initial state
    gsap.set(imageEl, { y: "25%", opacity: 0 });

    // Animate on scroll
    gsap.to(imageEl, {
        y: "0%",
        opacity: 1,
        ease: EASING,
        scrollTrigger: {
            trigger: imageEl,
            start: "top bottom",
            end: `top bottom-=${getEffectiveHeight(IMAGE_SELECTOR)}`,
            scrub: true,
            markers: !PRODUCTION
        }
    });
}