/**
 * HYMN | initSmoothScroll
 * @build 15.08.25 @updated 14.09.25 @22:40 PHT
 */
export function initSmoothScroll() {
    class SmoothScrollManager {
        constructor() {
            this.lenis = null;
            this.isAnimating = false;

            // create a promise that resolves when lenis is ready
            this.ready = new Promise((resolve) => {
                this._resolveReady = resolve;
            });

            this.init();
        }

        init() {
            this.lenis = new Lenis({
                smooth: true,
                duration: 1.75,
                lerp: 0.1,
                direction: "vertical",
                gestureDirection: "vertical",
                smoothTouch: false,
                infinite: false
            });

            window.lenis__pageScroll = this.lenis;
            window.smoothScrollManager = this; // <-- expose globally

            this.startAnimation();
            this.setupScrollTrigger();
            this.observeContentChanges();

            // resolve the ready promise so navigation can use lenis
            this._resolveReady(this.lenis);
        }

        startAnimation() {
            if (!this.isAnimating) {
                this.isAnimating = true;
                const raf = (time) => {
                    this.lenis.raf(time);
                    requestAnimationFrame(raf);
                };
                requestAnimationFrame(raf);
            }
        }

        setupScrollTrigger() {
            ScrollTrigger.scrollerProxy(document.body, {
                scrollTop: (v) =>
                    arguments.length
                        ? this.lenis.scrollTo(v, { immediate: true })
                        : window.scrollY,
                getBoundingClientRect: () => ({
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                }),
                pinType: "transform"
            });
            this.lenis.on("scroll", ScrollTrigger.update);
        }

        observeContentChanges() {
            const observer = new ResizeObserver(() => {
                if (this.lenis) {
                    this.lenis.resize();
                    ScrollTrigger.refresh();
                }
            });
            observer.observe(document.body);
        }
    }

    // Initialize immediately instead of waiting for window.load
    new SmoothScrollManager();
}