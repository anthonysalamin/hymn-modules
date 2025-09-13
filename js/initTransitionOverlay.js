/**
 * UTILITY | initTransitionOverlay
 * @build 04.11.24 @updated 13.09.25 @23:59 PHT
 */

export function initTransitionOverlay() {
    const CONFIG = {
        overlay: '[data-id="transition-overlay"]',
        delay: 0.65
    };

    const overlayEl = document.querySelector(CONFIG.overlay);
    if (!overlayEl) {
        console.log("skipping transition overlay");
        return;
    }

    function fadeOutAndHide() {
        gsap.to(overlayEl, {
            opacity: 0,
            duration: 2,
            ease: "power1.out",
            delay: CONFIG.delay,
            onComplete() {
                gsap.set(overlayEl, { display: "none" });
                console.log("transition overlay completed");
            }
        });
    }

    fadeOutAndHide();
}