/**
 * HYMN | initClickDrag v2.1
 * @build 06.08.25 @updated 15:54
 * Enables draggable horizontal sliders with a custom drag cursor
 */

export function initClickDrag() {
    document.addEventListener("DOMContentLoaded", () => {
        const OPTIONS = {
            PRODUCTION: true,
            CLICK_N_DRAG: '[data-slider="clickndrag"]',
            CONTENT: '[data-slider="content"]',
            MARGIN: '[data-slider="margin"]',
            DESKTOP_BREAKPOINT: 992,
            MOBILE_FAST_BREAKPOINT: 480
        };

        const state = { top: 0, left: 0, x: 0, y: 0 };
        const velocity = { positions: [], timestamps: [], maxSamples: 5 };
        let dragIconCreated = false;
        const dragIcon = document.createElement("div");
        const sliders = document.querySelectorAll('[data-slider="horizontal-scroll"]');
        const elementMap = new Map();

        if (!document.querySelector(OPTIONS.CLICK_N_DRAG)) {
            console.log("skipping click n drag");
            return;
        }

        const isDesktop = () => window.innerWidth >= OPTIONS.DESKTOP_BREAKPOINT;
        const isMobileFast = () => window.innerWidth <= OPTIONS.MOBILE_FAST_BREAKPOINT;

        function createDragIcon() {
            if (dragIconCreated) return;
            dragIcon.innerHTML = "drag";
            dragIcon.classList.add("drag-icon");
            Object.assign(dragIcon.style, {
                position: "absolute",
                padding: "4px 8px",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 0, 0, 0.65)",
                color: "currentColor",
                borderRadius: "5px",
                pointerEvents: "none",
                zIndex: 999
            });
            document.body.appendChild(dragIcon);
            dragIconCreated = true;
        }

        function attachDragEvents(el, enable = true) {
            const handlers = elementMap.get(el) || {};
            if (enable && isDesktop()) {
                if (!handlers.mousemove) {
                    handlers.mousemove = (e) => moveDragIcon(e);
                    handlers.mouseenter = (e) => showDragIcon(e);
                    handlers.mouseleave = () => hideDragIcon();
                    el.addEventListener("mousemove", handlers.mousemove);
                    el.addEventListener("mouseenter", handlers.mouseenter);
                    el.addEventListener("mouseleave", handlers.mouseleave);
                    elementMap.set(el, handlers);
                }
            } else {
                if (handlers.mousemove) {
                    el.removeEventListener("mousemove", handlers.mousemove);
                    el.removeEventListener("mouseenter", handlers.mouseenter);
                    el.removeEventListener("mouseleave", handlers.mouseleave);
                    handlers.mousemove = null;
                    handlers.mouseenter = null;
                    handlers.mouseleave = null;
                    elementMap.set(el, handlers);
                }
                dragIcon.style.display = "none";
            }
        }

        function moveDragIcon(e) {
            if (!isDesktop()) return;
            const x = (e.pageX || e.touches?.[0]?.pageX || 0) + 10;
            const y = (e.pageY || e.touches?.[0]?.pageY || 0) + 10;
            gsap.to(dragIcon, { duration: 0.65, left: x + "px", top: y + "px", ease: "power2.out" });
        }

        function showDragIcon(e) {
            if (isDesktop()) {
                moveDragIcon(e);
                dragIcon.style.display = "flex";
                gsap.fromTo(dragIcon, { opacity: 0 }, { opacity: 1, duration: 0.75, ease: "expo.out" });
            }
        }

        function hideDragIcon() {
            if (isDesktop()) {
                gsap.to(dragIcon, { opacity: 0, duration: 0.3, onComplete: () => (dragIcon.style.display = "none") });
            }
        }

        function setCursor(el) {
            el.style.cursor = isDesktop() ? "grab" : "default";
        }

        function getMarginLeft(el) {
            return el.querySelector(OPTIONS.MARGIN).getBoundingClientRect().left;
        }

        function setPadding(el, value) {
            el.style.paddingLeft = `${value}px`;
            el.style.paddingRight = `${value}px`;
        }

        function initSlider(slider) {
            const dragEl = slider.querySelector(OPTIONS.CLICK_N_DRAG);
            setPadding(slider.querySelector(OPTIONS.CONTENT), getMarginLeft(slider));
            setCursor(dragEl);
            createDragIcon();
            attachDragEvents(dragEl, isDesktop());
        }

        function handleDragStart(e, el) {
            const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
            const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
            el.style.cursor = isDesktop() ? "grabbing" : "default";
            el.style.userSelect = "none";
            state.left = el.scrollLeft;
            state.top = el.scrollTop;
            state.x = clientX;
            state.y = clientY;
            velocity.positions = [clientX];
            velocity.timestamps = [Date.now()];

            const moveHandler = (ev) => handleDragMove(ev, el);
            const endHandler = () => handleDragEnd(el, moveHandler, endHandler);

            document.addEventListener("mousemove", moveHandler);
            document.addEventListener("touchmove", moveHandler, { passive: false });
            document.addEventListener("mouseup", endHandler);
            document.addEventListener("touchend", endHandler);
        }

        function handleDragMove(e, el) {
            e.preventDefault();
            const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
            const deltaX = clientX - state.x;
            let speedMultiplier = 1;
            if (isMobileFast()) speedMultiplier = 3;
            else if (!isDesktop()) speedMultiplier = 1.5;

            const scrollTarget = state.left - deltaX * speedMultiplier;
            if (isDesktop()) {
                gsap.to(el, { scrollLeft: scrollTarget, ease: "expo.out", duration: 1.4 });
            } else {
                const now = Date.now();
                velocity.positions.push(clientX);
                velocity.timestamps.push(now);
                if (velocity.positions.length > velocity.maxSamples) {
                    velocity.positions.shift();
                    velocity.timestamps.shift();
                }
                gsap.to(el, { scrollLeft: scrollTarget, ease: "power2.out", duration: 0 });
            }
        }

        function handleDragEnd(el, moveHandler, endHandler) {
            el.style.cursor = isDesktop() ? "grab" : "default";
            el.style.removeProperty("user-select");
            document.removeEventListener("mousemove", moveHandler);
            document.removeEventListener("touchmove", moveHandler);
            document.removeEventListener("mouseup", endHandler);
            document.removeEventListener("touchend", endHandler);
        }

        sliders.forEach((slider) => {
            const dragEl = slider.querySelector(OPTIONS.CLICK_N_DRAG);
            setCursor(dragEl);
            dragEl.style.overflowX = "hidden";
            dragEl.style.touchAction = "none";
            createDragIcon();
            initSlider(slider);

            window.addEventListener("resize", () => initSlider(slider));
            dragEl.addEventListener("mousedown", (e) => handleDragStart(e, dragEl));
            dragEl.addEventListener("touchstart", (e) => handleDragStart(e, dragEl));
            attachDragEvents(dragEl, isDesktop());
        });
    });
}