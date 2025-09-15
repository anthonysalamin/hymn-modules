/**
 * UTILITY | initRemoveEmptyVideos
 * @build 06.01.25 @updated 21:14 PHT
 * Removes all <div> elements with empty data-url attributes and updates Lenis page scroll
 */

export function initRemoveEmptyVideos() {
    function removeEmptyVideos() {
        const videos = document.querySelectorAll("div[data-url]");
        videos.forEach(video => {
            if (!video.getAttribute("data-url")) {
                video.remove();
            }
        });

        if (window.lenis__pageScroll && typeof window.lenis__pageScroll.resize === "function") {
            window.lenis__pageScroll.resize();
            // console.log("🔄 Lenis page scroll updated after removing empty videos");
        }
    }

    document.addEventListener("DOMContentLoaded", removeEmptyVideos);
}