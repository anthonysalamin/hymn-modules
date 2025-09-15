/**
 * HYMN | initHeaderImgScaleScrub
 * @build 07.08.25 @updated 13.09.25 @23:59 PHT
 * Animates header image scaling, gradient height, and video opacity on scroll using GSAP.
 */

export function initHeaderImgScaleScrub() {
    const config = {
        PRODUCTION: true,
        ELEMENT: {
            CONTAINER: '[data-id="highlight-container"]',
            IMAGE: '[data-id="scale-on-scroll"]',
            GRADIENT: '[data-id="header-gradient"]',
            VIDEO: '[data-id="embed-vimeo"]'
        },
        CONFIG: {
            MAX_SCALE: 1.075
        }
    };

    function imgOnScroll() {
        const container = document.querySelector(config.ELEMENT.CONTAINER);
        if (!container) {
            // console.log("skipping header animation on scrub");
            return;
        }

        const image = container.querySelector(config.ELEMENT.IMAGE);
        gsap.to(image, {
            scale: config.CONFIG.MAX_SCALE,
            ease: "expo.out",
            scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "center top",
                scrub: true,
                markers: false
            }
        });
    }

    function gradientOnScroll() {
        const gradient = document.querySelector(config.ELEMENT.GRADIENT);
        if (!gradient) {
            // console.log("skipping gradient animation on scrub");
            return;
        }

        gsap.to(gradient, {
            height: "60vh",
            ease: "expo.out",
            scrollTrigger: {
                trigger: gradient,
                start: "bottom bottom",
                end: "bottom center",
                scrub: true,
                markers: false
            }
        });
    }

    function videoOnScroll() {
        const video = document.querySelector(config.ELEMENT.VIDEO);
        if (!video) {
            // console.log("skipping video animation on scrub");
            return;
        }

        gsap.to(video, {
            opacity: 0.35,
            ease: "expo.out",
            scrollTrigger: {
                trigger: video,
                start: "bottom bottom",
                end: "bottom top",
                scrub: true,
                markers: !config.PRODUCTION
            }
        });
    }

    // Initialize all animations
    imgOnScroll();
    gradientOnScroll();
    videoOnScroll();
}