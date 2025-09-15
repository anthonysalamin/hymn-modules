/**
 * HYMN | initNavigation
 * @build 14.08.25 @updated 23:40 PHT
 * Navigation module for HYMN, handling menu open/close, scroll lock, overlays, and seemore parallax, fully integrated with Lenis and GSAP ScrollTrigger.
 */

export function initNavigation() {
    // Changed from window.load to DOMContentLoaded for faster init
    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", initNavSystem);
    } else {
        // DOM is already loaded, init immediately
        initNavSystem();
    }

    function initNavSystem() {
        if (!window.smoothScrollManager) {
            console.error("SmoothScrollManager not found - waiting for initialization");

            // Fallback: wait a bit and check again
            setTimeout(() => {
                if (window.smoothScrollManager) {
                    window.smoothScrollManager.ready.then((lenis) => {
                        // console.log("✅ Lenis ready (delayed):", lenis);
                        navigationModule(lenis);
                    });
                } else {
                    console.error("SmoothScrollManager still not found - navigation disabled");
                }
            }, 100);
            return;
        }

        // Wait for Lenis instance from SmoothScrollManager
        window.smoothScrollManager.ready.then((lenis) => {
            // console.log("✅ Lenis ready:", lenis);
            navigationModule(lenis);
        });
    }

    function navigationModule(lenis__pageScroll) {
        // --------------------------------------------
        // CONFIGURATION
        // --------------------------------------------
        const NAVIGATION_OPTIONS = {
            PRODUCTION: true,
            NAV__BUTTONS: document.querySelectorAll(`[data-btn]`),
            NAV__CONTENTS: document.querySelectorAll(`[data-content]`),
            UTILITY: {
                NAV__WRAPPER: document.querySelector(`[data-id="nav-module"]`),
                NAV__CONTENT__WRAPPER: document.querySelector(`[data-utility="content"]`),
                NAV__OVERLAY: document.querySelector(`[data-utility="overlay"]`)
            },
            SEEMORE: {
                SCROLLER: `[data-utility="content"]`,
                TARGET: `[data-parallax="target"]`
            }
        };

        const LENIS_OPTIONS = {
            smooth: true,
            duration: 1.75,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smoothTouch: false,
            infinite: false
        };

        if (!NAVIGATION_OPTIONS.UTILITY.NAV__OVERLAY) {
            console.warn("⚠ Navigation overlay not found — skipping navigation init.");
            return;
        }

        // --------------------------------------------
        // STATE
        // --------------------------------------------
        let menuIsClosed = true;
        let isScrollLocked = false;
        let outsideCategory = null;
        let clickOutsideListener = null;
        let seemore_ScrollTrigger;

        // --------------------------------------------
        // LENIS FOR FIXED NAVIGATION
        // --------------------------------------------
        const lenis__fixedNavigation = new Lenis({
            wrapper: document.querySelector(NAVIGATION_OPTIONS.SEEMORE.SCROLLER),
            ...LENIS_OPTIONS
        });

        window.lenis__fixedNavigation = lenis__fixedNavigation;
        console.log("✅ lenis__pageScroll ready:", !!lenis__pageScroll);
        console.log("✅ lenis__fixedNavigation ready:", !!window.lenis__fixedNavigation);

        ScrollTrigger.scrollerProxy(NAVIGATION_OPTIONS.SEEMORE.SCROLLER, {
            scrollTop(value) {
                return arguments.length
                    ? lenis__fixedNavigation.scrollTo(value)
                    : lenis__fixedNavigation.scroll;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }
        });

        lenis__fixedNavigation.on("scroll", ScrollTrigger.update);

        function rafFixedNav(time) {
            if (!menuIsClosed) {
                lenis__fixedNavigation.raf(time);
            }
            requestAnimationFrame(rafFixedNav);
        }

        // --------------------------------------------
        // SCROLL LOCK HANDLING
        // --------------------------------------------
        function calculateScrollbarWidth() {
            return window.innerWidth - document.documentElement.clientWidth;
        }

        function toggleScrollLock() {
            const scrollbarWidth = calculateScrollbarWidth();
            const shouldLock = !isScrollLocked;

            if (shouldLock) {
                lenis__pageScroll.stop();
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollbarWidth}px`;
                if (NAVIGATION_OPTIONS.UTILITY.NAV__WRAPPER) {
                    NAVIGATION_OPTIONS.UTILITY.NAV__WRAPPER.style.right = `${scrollbarWidth}px`;
                }
                // console.log(`Scroll locked (offset ${scrollbarWidth}px)`);
            } else {
                lenis__pageScroll.start();
                document.body.style.overflow = "";
                document.body.style.paddingRight = "0px";
                if (NAVIGATION_OPTIONS.UTILITY.NAV__WRAPPER) {
                    NAVIGATION_OPTIONS.UTILITY.NAV__WRAPPER.style.right = "0px";
                }
                // console.log("Scroll unlocked");
            }

            isScrollLocked = shouldLock;
        }

        // --------------------------------------------
        // UI HELPERS
        // --------------------------------------------
        function showOverlay() {
            gsap.to(NAVIGATION_OPTIONS.UTILITY.NAV__OVERLAY, {
                display: "block",
                opacity: 1,
                duration: 0.75,
                ease: "expo.out"
            });
        }

        function hideOverlay() {
            gsap.to(NAVIGATION_OPTIONS.UTILITY.NAV__OVERLAY, {
                delay: 0.15,
                opacity: 0,
                duration: 0.45,
                ease: "expo.in",
                onComplete: () => {
                    NAVIGATION_OPTIONS.UTILITY.NAV__OVERLAY.style.display = "none";
                }
            });
        }

        function scrollToTopInstant(element) {
            gsap.to(element, { scrollTo: { y: 0 }, duration: 0, delay: 0.65 });
        }

        function scrollToTopAnimated(element) {
            gsap.to(element, { scrollTo: { y: 0 }, ease: "expo.inOut", duration: 1.2 });
        }

        function getDistanceFromTop(element) {
            return element.getBoundingClientRect().top;
        }

        function getExpandedWrapperHeight(distanceFromTop, viewportHeight) {
            return viewportHeight - distanceFromTop - 20;
        }

        function getHeight(selector) {
            const el = document.querySelector(selector);
            const style = window.getComputedStyle(el);
            const height = el.clientHeight;
            return (
                height -
                parseFloat(style.paddingTop) -
                parseFloat(style.paddingBottom) -
                parseFloat(style.borderTopWidth) -
                parseFloat(style.borderBottomWidth)
            );
        }

        function getBottomPadding() {
            return 16;
        }

        // --------------------------------------------
        // CONTENT WRAPPER CONTROLS
        // --------------------------------------------
        function openWrapper(height, btnCategory) {
            gsap.to(NAVIGATION_OPTIONS.UTILITY.NAV__CONTENT__WRAPPER, {
                height: `${height}px`,
                duration: 0.65,
                ease: "expo.inOut",
                onComplete: () => {
                    if (btnCategory === "work") {
                        activateSeemoreScroll();
                    } else if (seemore_ScrollTrigger) {
                        seemore_ScrollTrigger.kill();
                    }
                }
            });
        }

        function closeWrapper() {
            gsap.to(NAVIGATION_OPTIONS.UTILITY.NAV__CONTENT__WRAPPER, {
                height: `0px`,
                duration: 0.65,
                ease: "expo.inOut",
                onComplete: () =>
                    scrollToTopInstant(NAVIGATION_OPTIONS.UTILITY.NAV__CONTENT__WRAPPER)
            });
        }

        // --------------------------------------------
        // CONTENT TOGGLE
        // --------------------------------------------
        function showContent(category) {
            NAVIGATION_OPTIONS.NAV__CONTENTS.forEach((content) => {
                if (content.dataset.content !== category) {
                    hideContent(content.dataset.content);
                    scrollToTopAnimated(NAVIGATION_OPTIONS.UTILITY.NAV__CONTENT__WRAPPER);
                }
            });
            const content = document.querySelector(`[data-content="${category}"]`);
            content.style.display = "block";
            gsap.to(content, { opacity: 1, duration: 0.45, ease: "expo.in" });
        }

        function hideContent(category) {
            const content = document.querySelector(`[data-content="${category}"]`);
            gsap.to(content, {
                opacity: 0,
                duration: 0.45,
                ease: "expo.in",
                onComplete: () => {
                    content.style.display = "none";
                }
            });
        }

        // --------------------------------------------
        // CLICK OUTSIDE TO CLOSE
        // --------------------------------------------
        function enableClickOutsideToClose() {
            if (clickOutsideListener) {
                document.removeEventListener("click", clickOutsideListener);
                clickOutsideListener = null;
            }
            clickOutsideListener = (event) => {
                if (event.target.hasAttribute("data-btn")) return;
                if (!NAVIGATION_OPTIONS.UTILITY.NAV__WRAPPER.contains(event.target)) {
                    console.log("🖱 Click outside detected — closing menu");
                    const btnToClose = document.querySelector(
                        `[data-btn="${outsideCategory}"]`
                    );
                    if (btnToClose) btnToClose.click();
                    menuIsClosed = true;
                    document.removeEventListener("click", clickOutsideListener);
                    clickOutsideListener = null;
                }
            };
            setTimeout(
                () => document.addEventListener("click", clickOutsideListener),
                100
            );
        }

        // --------------------------------------------
        // SEEMORE PARALLAX
        // --------------------------------------------
        function activateSeemoreScroll() {
            if (!document.querySelector(NAVIGATION_OPTIONS.SEEMORE.SCROLLER)) return;
            seemore_ScrollTrigger = gsap.to(NAVIGATION_OPTIONS.SEEMORE.TARGET, {
                opacity: 1,
                y: "0%",
                scrollTrigger: {
                    trigger: NAVIGATION_OPTIONS.SEEMORE.TARGET,
                    start: `top+=${50}% bottom-=1`,
                    end: `top+=${50}% bottom-=${getHeight(NAVIGATION_OPTIONS.SEEMORE.TARGET) + getBottomPadding()
                        }`,
                    scrub: true,
                    markers: !NAVIGATION_OPTIONS.PRODUCTION,
                    scroller: NAVIGATION_OPTIONS.SEEMORE.SCROLLER,
                    onUpdate: (self) =>
                        console.log(
                            `📜 Seemore progress: ${Math.round(self.progress * 100)}%`
                        )
                }
            }).scrollTrigger;
        }

        // --------------------------------------------
        // INITIAL STATE
        // --------------------------------------------
        function setInitialStates() {
            gsap.set(NAVIGATION_OPTIONS.UTILITY.NAV__OVERLAY, {
                display: "none",
                opacity: 0
            });
            gsap.set(NAVIGATION_OPTIONS.UTILITY.NAV__CONTENT__WRAPPER, {
                height: "0px"
            });
            NAVIGATION_OPTIONS.NAV__CONTENTS.forEach((content) => {
                if (content) gsap.set(content, { display: "none", opacity: 0 });
            });
        }

        function setSeemoreInitialState() {
            const target = document.querySelector(NAVIGATION_OPTIONS.SEEMORE.TARGET);
            if (target) gsap.set(target, { y: "-50%", opacity: 0 });
        }

        // --------------------------------------------
        // NAVIGATION BUTTONS
        // --------------------------------------------
        function initNavigationClicks() {
            NAVIGATION_OPTIONS.NAV__BUTTONS.forEach((button) => {
                button.addEventListener("click", (event) => {
                    const btn = event.currentTarget;
                    const category = btn.dataset.btn;
                    outsideCategory = category;

                    const wrapperHeight = getExpandedWrapperHeight(
                        getDistanceFromTop(NAVIGATION_OPTIONS.UTILITY.NAV__CONTENT__WRAPPER),
                        window.innerHeight
                    );

                    const wasOpen = !menuIsClosed;
                    btn.classList.toggle("checked");
                    document
                        .querySelector(".checked:not(:hover)")
                        ?.classList.remove("checked");

                    const isAnyChecked = Array.from(
                        NAVIGATION_OPTIONS.NAV__BUTTONS
                    ).some((btn) => btn.classList.contains("checked"));

                    if (wasOpen !== isAnyChecked) {
                        toggleScrollLock();
                    }

                    if (isAnyChecked) {
                        menuIsClosed = false;
                        showOverlay();
                        openWrapper(wrapperHeight, category);
                        showContent(category);
                        enableClickOutsideToClose();
                    } else {
                        menuIsClosed = true;
                        hideOverlay();
                        closeWrapper();
                        hideContent(category);
                        if (clickOutsideListener) {
                            document.removeEventListener("click", clickOutsideListener);
                            clickOutsideListener = null;
                        }
                    }
                });
            });
        }

        // --------------------------------------------
        // INITIALIZATION
        // --------------------------------------------
        setInitialStates();
        setSeemoreInitialState();
        initNavigationClicks();
        requestAnimationFrame(rafFixedNav);
    }
}