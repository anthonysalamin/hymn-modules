/**
 * HYMN | initCtaTextIcon
 * @build 11.09.24 @updated 22:35 PHT
 */

export function initCtaTextIcon() {
    (function () {
        const elements = {
            btnInfo: document.querySelector('[data-btn="info"]'),
            btnInfoText: document.querySelector('[data-id="info-text"]'),
            btnInfoIcon: document.querySelector('[data-id="info-icon"]')
        };

        if (!elements.btnInfo) {
            console.log("skipping info edge case");
            return;
        }

        function getCloseText() {
            const currentPath = window.location.pathname;
            if (currentPath.startsWith("/en")) {
                return "Close";
            } else if (currentPath.startsWith("/de")) {
                return "Schliessen";
            } else {
                return "Fermer";
            }
        }

        function showCloseState() {
            elements.btnInfoText.textContent = getCloseText();
            gsap.to(elements.btnInfoIcon, {
                rotation: 45,
                duration: 0.75,
                ease: "expo.out"
            });
        }

        function showInfoState() {
            elements.btnInfoText.textContent = "Info";
            gsap.to(elements.btnInfoIcon, {
                rotation: 0,
                duration: 0.65,
                ease: "expo.out"
            });
        }

        elements.btnInfo.addEventListener("click", () => {
            const isActive = elements.btnInfo.dataset.active === "true";

            if (isActive) {
                showInfoState();
            } else {
                showCloseState();
            }

            elements.btnInfo.dataset.active = (!isActive).toString();
        });
    })();
}