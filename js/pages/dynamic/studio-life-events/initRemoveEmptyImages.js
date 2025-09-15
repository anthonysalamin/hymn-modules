/**
 * UTILITY | initRemoveEmptyImages
 * @build 13.08.25 @updated 17:54 PHT
 * Removes all images with the class .w-condition-invisible and updates Lenis page scroll
 */

export function initRemoveEmptyImages() {
    function removeEmptyImages() {
        const images = document.querySelectorAll("img.portfolio__image.w-condition-invisible");
        images.forEach(img => img.remove());

        if (window.lenis__pageScroll && typeof window.lenis__pageScroll.resize === "function") {
            window.lenis__pageScroll.resize();
            // console.log("🔄 Lenis page scroll updated after removing empty images");
        }
    }

    document.addEventListener("DOMContentLoaded", removeEmptyImages);
}