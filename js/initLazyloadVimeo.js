/**
 * HYMN | initLazyloadVimeo
 * @build 04.11.24 @updated 23:45 PHT
 * Lazy-loads Vimeo videos and autoplays them when scrolled into view using ScrollTrigger.
 */

export function initLazyloadVimeo() {
    const videoSelector = '[data-id="lazy-video-autoplay"]';

    // Check for ScrollTrigger
    if (typeof ScrollTrigger === "undefined") {
        console.warn("ScrollTrigger not available, skipping lazy loading video");
        return;
    }

    // Skip if no matching element
    if (!document.querySelector(videoSelector)) {
        // console.log("skipping lazy loading video");
        return;
    }

    // Helper: extract Vimeo ID from playback URL
    function extractVideoID(url) {
        const match = url.match(/playback\/(\d+)\//);
        return match ? match[1] : null;
    }

    const videos = document.querySelectorAll(videoSelector);
    videos.forEach((video) => {
        const source = video.querySelector("source");
        let isPlaying = false;

        ScrollTrigger.create({
            trigger: video,
            start: "top bottom+=400px",
            onEnter() {
                if (!source.src) {
                    const dataSrc = source.getAttribute("data-src");
                    if (!dataSrc) return;

                    source.src = dataSrc;
                    const vimeoID = extractVideoID(source.src);

                    video.load();
                    video.addEventListener("canplay", () => {
                        if (!isPlaying) {
                            console.log(`vimeo source id ${vimeoID} lazy-loaded & ready to play`);
                            video.play();
                        }
                    });

                    video.addEventListener("playing", () => {
                        if (!isPlaying) {
                            console.log(`vimeo id ${vimeoID} is playing`);
                            isPlaying = true;
                        }
                    });
                }
            },
        });
    });
}