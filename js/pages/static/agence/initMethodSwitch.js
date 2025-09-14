/**
 * HYMN | initMethodSwitch
 * v1.1
 * build: 19.09.24 @12:16
 */
export function initMethodSwitch() {
    document.addEventListener("DOMContentLoaded", () => {
        const OPTIONS = {
            PRODUCTION: false,
            SLIDES: document.querySelectorAll('[data-slider="slide"]'),
            BACK: {
                SUMMARY: '[data-slider="back-sumary"]',
                TITLE: '[data-slider="back-title"]'
            },
            FRONT: {
                WRAP: '[data-slider="front-wrap"]',
                TITLE: '[data-slider="front-title"]'
            },
            ICON: {
                WRAP: '[data-slider="icon-wrap"]',
                PLUS: '[data-slider="icon-plus"]'
            }
        };

        if (!OPTIONS.SLIDES[0]) {
            console.log("skipping slider card switch");
            return;
        }

        let activeTimeline = null;

        OPTIONS.SLIDES.forEach((slide) => {
            const iconWrap = slide.querySelector(OPTIONS.ICON.WRAP);
            const iconPlus = iconWrap.querySelector(OPTIONS.ICON.PLUS);
            const frontWrap = slide.querySelector(OPTIONS.FRONT.WRAP);
            const frontTitle = slide.querySelector(OPTIONS.FRONT.TITLE);
            const backSummary = slide.querySelector(OPTIONS.BACK.SUMMARY);
            const backTitle = slide.querySelector(OPTIONS.BACK.TITLE);

            // Timeline for this slide
            const tl = gsap.timeline({ paused: true, reversed: true });

            tl.to(iconPlus, { rotation: 45, duration: 0.65, ease: "expo.out" })
                .to(iconWrap, { opacity: 0, duration: 0.3, ease: "expo.out" }, 0)
                .to(frontTitle, { y: "50%", duration: 0.65, ease: "expo.out" }, 0)
                .fromTo(backSummary, { y: "-50%" }, { y: "0%", duration: 0.65, ease: "expo.out" }, "<")
                .to(frontWrap, { opacity: 0, duration: 0.65, ease: "expo.out" }, "<");

            // Click icon to toggle timeline
            iconWrap.addEventListener("click", () => {
                if (activeTimeline && activeTimeline !== tl && !activeTimeline.reversed()) {
                    activeTimeline.reverse();
                }
                if (tl.reversed()) {
                    tl.play();
                    activeTimeline = tl;
                }
            });

            // Click front wrap to close timeline
            frontWrap.addEventListener("click", () => {
                if (!tl.reversed()) {
                    tl.reverse();
                    activeTimeline = null;
                }
            });
        });
    });
}