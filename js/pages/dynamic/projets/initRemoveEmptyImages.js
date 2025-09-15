/**
 * UTILITY | initRemoveEmptyImages
 * @build 13.08.25 @updated 17:54 PHT
 * It removes all invisible portfolio images from the DOM and refreshes Lenis page scroll once the DOM is loaded.
 */

export function initRemoveEmptyImages() {
    (function () {
        function removeEmptyImages() {
            const images = document.querySelectorAll("img.portfolio__image.w-condition-invisible");
            images.forEach(img => img.remove());

            if (window.lenis__pageScroll && typeof window.lenis__pageScroll.resize === "function") {
                window.lenis__pageScroll.resize();
                // console.log("🔄 Lenis page scroll updated after removing empty images");
            }
        }

        document.addEventListener("DOMContentLoaded", () => {
            removeEmptyImages();
        });
    })();
}