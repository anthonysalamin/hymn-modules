/**
 * HYMN | initNavLogoShrink
 * @build 10.09.24 @updated 00:42 PHT
 * Mobile nav logo shrink/expand on scroll using GSAP ScrollTrigger, active only on screens ≤479px.
 */

export function initNavLogoShrink() {
    const OPTIONS = {
        NAV: document.querySelector('[data-id="nav-module"]'),
        LOGO: document.querySelector('[data-id="logo-mobile"]'),
    };

    if (!OPTIONS.NAV || !OPTIONS.LOGO) {
        console.warn("skipping mobile nav shrink/expand");
        return;
    }

    function isMobile() {
        return window.innerWidth <= 479;
    }

    function getMarginTop(el) {
        return parseFloat(window.getComputedStyle(el).marginTop);
    }

    function getElementContentHeight(el) {
        let style = window.getComputedStyle(el);
        let paddingTop = parseFloat(style.paddingTop);
        let paddingBottom = parseFloat(style.paddingBottom);
        return el.clientHeight - paddingTop - paddingBottom;
    }

    function initMobileBehaviour(config) {
        if (!isMobile()) return;

        gsap.timeline({
            scrollTrigger: {
                trigger: config.NAV,
                start: `top top+=${getMarginTop(config.NAV)}`,
                end: `top+=${getElementContentHeight(config.NAV)} top+=${getMarginTop(config.NAV)}px`,
                scrub: true,
                markers: false,
            },
            onComplete() {
                console.log("mobile navbar behaviour is shrunk");
            },
            onReverseComplete() {
                console.log("mobile navbar behaviour is expanded again");
            },
        })
            .to(config.NAV, { marginTop: 24, ease: "none" }, 0)
            .to(config.LOGO, { opacity: 0, y: getMarginTop(config.NAV) / 4, ease: "none" }, 0);
    }

    initMobileBehaviour(OPTIONS);
}