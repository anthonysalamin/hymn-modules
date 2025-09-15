/**
 * HYMN | initLottie
 * @build 01.12.24 @updated 13:02
 * Loads and plays a Lottie animation with overlay fade-out on completion.
 */

export function initLottie() {
    document.addEventListener("DOMContentLoaded", () => {
        const LOTTIE_OPTIONS = {
            PRODUCTION: false,
            CONTAINER: document.querySelector(`[data-lottie_target="hymn"]`),
            OVERLAY: document.querySelector(`[data-id="hymn-overlay"]`),
            DURATION: 1.65,
            EASE: "expo.out",
            TRESHOLD: 80
        };

        if (!LOTTIE_OPTIONS.CONTAINER) {
            // console.log("skipping HYMN lottie animation");
            return;
        }

        const animationDataString = LOTTIE_OPTIONS.CONTAINER.dataset.lottie_content;
        let parsedAnimationData;

        // Parse JSON animation data
        try {
            parsedAnimationData = JSON.parse(animationDataString);
        } catch (error) {
            console.error("Oopsi, error parsing JSON:", error);
            return;
        }

        // Fade out overlay helper
        function fadeOutOverlay(element) {
            gsap.to(element, {
                opacity: 0,
                duration: LOTTIE_OPTIONS.DURATION,
                ease: LOTTIE_OPTIONS.EASE,
                onComplete: () => {
                    element.style.display = "none";
                }
            });
        }

        // Init Lottie animation
        const animation = lottie.loadAnimation({
            container: LOTTIE_OPTIONS.CONTAINER,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: parsedAnimationData
        });

        // Play animation when loaded
        animation.addEventListener("DOMLoaded", () => {
            console.log("HYMN JSON data loaded, playing animation");
            animation.play();
        });

        // Fade out overlay on completion
        animation.addEventListener("complete", () => {
            console.log("HYMN lottie animation finished ✨");
            fadeOutOverlay(LOTTIE_OPTIONS.OVERLAY);
        });

        // Error handler
        animation.addEventListener("error", (error) => {
            console.error("HYMN lottie animation error:", error);
        });
    });
}