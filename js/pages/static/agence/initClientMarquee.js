/**
 * HYMN | initClientMarquee
 * v2.1 (Safari)
 * build 12.08.25 @ 21:14 PHT
 */
export function initClientMarquee() {
    function debounce(func, delay = 200) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    document.addEventListener("DOMContentLoaded", () => {
        const OPTIONS = {
            MARQUEE_TRACK: document.querySelector(`[data-marquee="track"]`),
            MARQUEE_SETS: document.querySelectorAll(`[data-marquee="set"]`),
            SPEED: 100
        };

        if (!OPTIONS.MARQUEE_TRACK) return;

        // Wait until all logos have decoded (so width measurements are stable)
        const imgs = Array.from(OPTIONS.MARQUEE_TRACK.querySelectorAll("img"));
        const decodePromises = imgs.map((img) => {
            if (img.complete) return Promise.resolve();
            return img.decode
                ? img.decode()
                : new Promise((res) => {
                    img.onload = img.onerror = res;
                });
        });

        Promise.all(decodePromises)
            .then(() => {
                startMarquee(OPTIONS);

                // Recalculate on resize
                window.addEventListener(
                    "resize",
                    debounce(() => {
                        gsap.killTweensOf(OPTIONS.MARQUEE_TRACK);
                        startMarquee(OPTIONS);
                    }, 200)
                );
            })
            .catch(() => {
                // fallback — still start even if decode fails
                startMarquee(OPTIONS);
            });
    });

    function startMarquee(OPTIONS) {
        const firstSet = OPTIONS.MARQUEE_SETS[0];
        if (!firstSet) return;

        // round up to integer and add tiny 1px fudge for Safari
        const singleSetWidth = Math.ceil(firstSet.getBoundingClientRect().width);
        const totalWidth = singleSetWidth * 2 + 1;

        gsap.set(OPTIONS.MARQUEE_TRACK, { x: 0 });
        OPTIONS.MARQUEE_TRACK.style.willChange = "transform";
        OPTIONS.MARQUEE_TRACK.style.transform = "translate3d(0,0,0)";

        const tl = gsap.timeline({ repeat: -1 });
        tl.to(OPTIONS.MARQUEE_TRACK, {
            x: -totalWidth,
            duration: OPTIONS.SPEED * 2,
            ease: "none"
        });
    }
}