/**
 * HYMN | initHeadlineDown
 * @build 18.09.24 @updated 23:59 PHT
 * Animates a headline moving down as the page scrolls using GSAP ScrollTrigger.
 */

export function initHeadlineDown() {
    const CONFIG = {
        PRODUCTION: true,
        TARGET: '[data-id="headline-big"]',
        TRIGGER: '[data-id="embed-vimeo-cine"]',
        MOVE: "70%",
        EASING: "expo.out"
    };

    const targetEl = document.querySelector(CONFIG.TARGET);
    const triggerEl = document.querySelector(CONFIG.TRIGGER);

    if (!targetEl) {
        console.log("skipping headline animation on scroll");
        return;
    }

    function getTriggerMarginTop(selector) {
        const el = document.querySelector(selector).parentElement;
        const style = window.getComputedStyle(el);
        return style.marginTop;
    }

    function animateHeadline() {
        const triggerTop = triggerEl.getBoundingClientRect().top;
        gsap.to(CONFIG.TARGET, {
            y: CONFIG.MOVE,
            scrollTrigger: {
                trigger: CONFIG.TARGET,
                start: `bottom+=${getTriggerMarginTop(CONFIG.TRIGGER)} top+=${triggerTop}`,
                end: `bottom+=${getTriggerMarginTop(CONFIG.TRIGGER)} top`,
                scrub: true,
                markers: !CONFIG.PRODUCTION
            }
        });
    }

    animateHeadline();
}