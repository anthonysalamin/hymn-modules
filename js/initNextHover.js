/**
 * HYMN | initNextHover
 * @build 04.09.24 @updated 13.09.25 @23:59 PHT
 */

export function initNextHover() {
    const TRIGGER = document.querySelector('[data-id="next__wrap"]');
    const TARGET = document.querySelector('[data-id="next__image"]');

    if (!TRIGGER || !TARGET) {
        console.log("skipping next hover states");
        return;
    }

    function onEnter() {
        gsap.to(TARGET, { duration: 0.45, scale: 1.05, ease: "expo.out" });
    }

    function onLeave() {
        gsap.to(TARGET, { duration: 0.15, scale: 1, ease: "power1.in" });
    }

    TRIGGER.addEventListener("mouseenter", onEnter);
    TRIGGER.addEventListener("mouseleave", onLeave);
}