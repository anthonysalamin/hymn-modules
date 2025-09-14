/**
 * HYMN | initServices
 * @build 18.09.24 @updated 14.09.25 @00:08 PHT
 */

export function initServices() {
    const OPTIONS = {
        draggable: '[data-id="service-box"]',
        draggableContainer: '[data-id="service-box-container"]',
        boxInner: '[data-id="service-box-inner"]',
        serviceItem: '[data-id="service-item"]',
        serviceImg: '[data-id="service-image"]',
        image: '[data-id="service-box-image"]',
        audio: '[data-id="service-audio"]',
        corners: { small: "5px", big: "25" },
    };

    if (!document.querySelector(OPTIONS.draggable)) {
        console.log("skipping service draggable module");
        return;
    }

    let timeline;
    let draggableEl = document.querySelector(OPTIONS.draggable);
    let containerEl = document.querySelector(OPTIONS.draggableContainer);
    let viewportWidth = window.innerWidth;

    function updateProgress(e) {
        let t = e.x / e.maxX;
        timeline.progress(t);
    }

    function initDraggable() {
        let middle = containerEl.clientWidth / 2 - draggableEl.clientWidth / 2;
        let maxX = containerEl.clientWidth - draggableEl.clientWidth;

        Draggable.create(draggableEl, {
            type: "x",
            bounds: containerEl,
            inertia: true,
            onDrag() { updateProgress(this); },
            onMove() { updateProgress(this); },
            onThrowUpdate() { updateProgress(this); },
            maxDuration: 0.4,
            snap: { x: [0, Math.round(middle), Math.round(maxX)] },
        });

        timeline = gsap.timeline({
            paused: true,
            defaults: { ease: Linear.easeNone },
        });

        timeline
            .fromTo(
                OPTIONS.boxInner,
                { duration: 1, scaleY: 1, scaleX: 1, borderRadius: OPTIONS.corners.small },
                { duration: 1, scaleY: 2, scaleX: 2, borderRadius: OPTIONS.corners.big }
            )
            .fromTo(
                OPTIONS.boxInner,
                { duration: 1, scaleY: 2, scaleX: 2, borderRadius: OPTIONS.corners.big },
                { duration: 1, scaleY: 1, scaleX: 1, borderRadius: OPTIONS.corners.small }
            );

        timeline.progress(1.5);
    }

    function handleResize() {
        let newWidth = window.innerWidth;
        if (newWidth !== viewportWidth) {
            viewportWidth = newWidth;
            timeline.kill();
            Draggable.get(OPTIONS.draggable).kill();
            draggableEl.style.transform = "translate(0)";
            initDraggable();
        }
    }

    function activateService(el) {
        document.querySelectorAll(OPTIONS.serviceItem).forEach(item => {
            item.classList.remove("active");
        });
        el.classList.add("active");
        let imgSrc = el.querySelector(OPTIONS.serviceImg).getAttribute("src");
        document.querySelector(OPTIONS.image).setAttribute("src", imgSrc);
    }

    window.addEventListener("resize", handleResize);
    initDraggable();

    document.querySelectorAll(OPTIONS.serviceItem).forEach(el => {
        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top center",
                end: "bottom center",
                onEnter: () => activateService(el),
                onEnterBack: () => activateService(el),
            },
        });
    });

    document
        .querySelector(OPTIONS.image)
        .setAttribute(
            "src",
            document.querySelector(`${OPTIONS.serviceItem} ${OPTIONS.serviceImg}`).getAttribute("src")
        );
}