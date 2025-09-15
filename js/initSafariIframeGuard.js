/**
 * UTILITY | initSafariIframeGuard
 * @build 15.08.25 @updated 00:50 PHT
 * Adds a temporary overlay on Vimeo/YouTube iframes in Safari to prevent accidental scroll hijacking.
 */

export function initSafariIframeGuard() {
    const OPTIONS = {
        CONTAINERS: document.querySelectorAll(".portfolio__video"),
        GUARD_CLASS: "iframe-scroll-guard",
        DELAY: 1200,
    };

    function isSafariBrowser() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }

    function setupIframeGuards() {
        OPTIONS.CONTAINERS.forEach((container) => {
            if (container.querySelector(`.${OPTIONS.GUARD_CLASS}`)) return;

            const guard = document.createElement("div");
            guard.className = OPTIONS.GUARD_CLASS;
            container.appendChild(guard);

            const iframe = container.querySelector("iframe");

            const activateGuard = () => {
                guard.style.pointerEvents = "auto";
                if (iframe) iframe.style.pointerEvents = "none";
            };

            const deactivateGuard = () => {
                guard.style.pointerEvents = "none";
                if (iframe) iframe.style.pointerEvents = "";
            };

            container.addEventListener("mouseenter", activateGuard);
            container.addEventListener("mouseleave", deactivateGuard);
            container.addEventListener("pointerdown", () => {
                deactivateGuard();
                setTimeout(activateGuard, OPTIONS.DELAY);
            });
            container.addEventListener(
                "touchstart",
                () => {
                    deactivateGuard();
                    setTimeout(activateGuard, OPTIONS.DELAY);
                },
                { passive: true }
            );
        });
    }

    if (isSafariBrowser()) {
        setupIframeGuards();
        console.log("✅ Safari detected → iframe scroll guard enabled");
    } else {
        console.log("⚠️ Non-Safari browser → iframe scroll guard skipped");
    }
}