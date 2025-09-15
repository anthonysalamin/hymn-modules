/**
 * HYMN | initStickyListAnchor
 * @build 11.09.24 @updated 22:28
 * Adds clickable sticky list anchors that scroll smoothly to their targets and highlight the active item.
 */

export function initStickyListAnchor() {
    (function () {
        function isMobile() {
            return window.innerWidth <= 479;
        }

        function list_switchColorOnClick(event) {
            let el = event.currentTarget;
            if (!el.classList.contains("list-checked")) {
                let checked = document.querySelectorAll(".list-checked");
                checked.forEach(item => {
                    item.classList.remove("list-checked");
                });
                el.classList.add("list-checked");
            }
        }

        function sticky_list__scrollOnClick(OPTIONS) {
            let triggers = document.querySelectorAll(OPTIONS.LIST_TRIGGERS);
            triggers.forEach(trigger => {
                trigger.addEventListener("click", ev => {
                    list_switchColorOnClick(ev);
                    let targetAttr = trigger.dataset.stickyList;
                    let targetEl = document.querySelector(
                        `[data-sticky-list-target="${targetAttr}"]`
                    );
                    let rect = targetEl.getBoundingClientRect();
                    let scrollY = rect.top + window.pageYOffset - OPTIONS.OFFSET;

                    gsap.to(window, {
                        scrollTo: { y: scrollY, autoKill: false },
                        duration: OPTIONS.DURATION,
                        ease: OPTIONS.EASE
                    });
                });
            });
        }

        document.addEventListener("DOMContentLoaded", () => {
            const OPTIONS = {
                LIST_TRIGGERS: "[data-sticky-list]",
                LIST_TARGETS: "[data-sticky-list-target]",
                OFFSET: 150,
                DURATION: 1.2,
                EASE: "expo.inOut"
            };

            if (!document.querySelector(OPTIONS.LIST_TRIGGERS) || isMobile()) {
                console.log("skipping sticky anchor handling");
                return;
            }

            sticky_list__scrollOnClick(OPTIONS);
        });
    })();
}