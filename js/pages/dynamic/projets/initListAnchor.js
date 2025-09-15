/**
 * HYMN | initListAnchor
 * @build 11.09.24 @updated 22:28 PHT
 * Handles anchor list button states and smooth scrolling inside a container.
 */
export function initListAnchor() {
    const OPTIONS = {
        listContainer: '[data-utility="content"]',
        listButtons: '[data-list]',
        offset: 80,
        duration: 1.2,
        ease: "expo.inOut"
    };

    if (!document.querySelector(OPTIONS.listContainer)) {
        console.log("skipping anchor handling");
        return;
    }

    // Set initial state
    function setInitialStates() {
        const firstButton = document.querySelectorAll(OPTIONS.listButtons)[0];
        if (firstButton) firstButton.classList.add("list-checked");
    }

    // Switch button highlight
    function switchColorOnClick(button, event) {
        const target = event.currentTarget;
        if (target.classList.contains("list-checked")) return;

        const active = document.querySelector(".list-checked");
        if (active) active.classList.remove("list-checked");

        target.classList.add("list-checked");
    }

    // Smooth scroll on click
    function scrollOnClick() {
        const buttons = document.querySelectorAll(OPTIONS.listButtons);
        const container = document.querySelector(OPTIONS.listContainer);

        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                switchColorOnClick(button, event);

                const id = button.dataset.list;
                const targetEl = document.querySelector(`#${id}`);
                if (!targetEl) return;

                const targetRect = targetEl.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const y = targetRect.top - containerRect.top + container.scrollTop - OPTIONS.offset;

                gsap.to(container, {
                    scrollTo: { y },
                    duration: OPTIONS.duration,
                    ease: OPTIONS.ease
                });
            });
        });
    }

    // Init
    setInitialStates();
    scrollOnClick();
}