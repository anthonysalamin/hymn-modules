/**
 * HYMN | initLazyloadVimeo v2.7.6.1
 * @build 06.11.24 @updated 18:51 PHT
 * lazy-loads Vimeo videos with autoplay, cursor interaction, responsive wrappers, and status logging.
 */

export function initLazyloadVimeo() {
    // 🥬 Helpers
    const getHeightPercentage = (e) => (1 / e * 100).toFixed(2) + "%";

    const createWrapperRatio = (ratio) => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.paddingTop = getHeightPercentage(ratio);
        return wrapper;
    };

    const projectVimeoAutoplay = (id) =>
        `<iframe src="https://player.vimeo.com/video/${id}?dnt=1&badge=0&autopause=0&player_id=0&autoplay=1&muted=1&controls=0&loop=1" frameborder="0" allow="autoplay" title="HYMN"></iframe>`;

    const checkVideoStatus = (player, id) => {
        const startTime = performance.now();
        player.on("loaded", () => console.log(`Video id ${id} loaded, ready to play`));
        player.on("play", () => {
            const elapsed = (performance.now() - startTime) / 1000;
            console.log(`Video id ${id} took ${elapsed.toFixed(3)} seconds from load to play 🍿`);
        });
        player.on("pause", () => console.log(`Video id ${id} paused`));
        player.on("error", (err) => console.error(`Video ${id} encountered error:`, err));
    };

    const injectCSS = () => {
        const style = document.createElement("style");
        style.textContent = `
        .portfolio__video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .has-pointer {
          cursor: pointer;
        }
      `;
        document.head.appendChild(style);
    };

    const initFollowCursor = (options) => {
        if (window.innerWidth < options.DESKTOP_BREAKPOINT) {
            console.log("skipping cursor play");
            return;
        }

        const icon = document.createElement("div");
        icon.innerHTML = "play";
        icon.id = "drag-icon__play";
        Object.assign(icon.style, {
            position: "absolute",
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.65)",
            color: "currentColor",
            borderRadius: "5px",
            pointerEvents: "none",
            opacity: "0",
            zIndex: "999",
        });
        document.body.appendChild(icon);

        const playElements = Array.from(document.querySelectorAll('[data-url*="play."]'));
        const updateIconPosition = (e) => {
            gsap.to(icon, { duration: 0.65, left: e.pageX + 10 + "px", top: e.pageY + 10 + "px", ease: "power2.out" });
        };

        playElements.forEach((el) => {
            el.addEventListener("mouseenter", (e) => {
                updateIconPosition(e);
                gsap.to(icon, { opacity: 1, duration: 0.2 });
                window.addEventListener("mousemove", updateIconPosition);
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(icon, { opacity: 0, duration: 0.2 });
                window.removeEventListener("mousemove", updateIconPosition);
            });
        });
    };

    const initLazyloadVideos = (options) => {
        const videoElements = document.querySelectorAll("[data-url]");
        const loadedMap = new Map();

        videoElements.forEach((el) => {
            let url = el.getAttribute("data-url");
            loadedMap.set(url, { loadStartTime: performance.now() });

            if (url.includes("play.")) {
                const originalUrl = url;
                url = url.replace("play.", "");
                const wrapper = createWrapperRatio(options.RATIO);
                el.appendChild(wrapper);
                el.classList.add("has-pointer");

                const iframe = document.createElement("iframe");
                iframe.src = `https://player.vimeo.com/video/${url}?badge=0&autopause=0&player_id=0&muted=0&controls=1&loop=0`;
                iframe.frameBorder = "0";
                iframe.allow = "autoplay; fullscreen";
                iframe.title = "HYMN";
                Object.assign(iframe.style, { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" });
                wrapper.appendChild(iframe);

                const player = new Vimeo.Player(iframe);
                checkVideoStatus(player, originalUrl);

                el.addEventListener("click", () => {
                    player.getPaused().then((paused) => paused ? player.play() : player.pause())
                        .catch((err) => console.error(`Error toggling video ${url}:`, err));
                });
            } else {
                const wrapper = createWrapperRatio(options.RATIO);
                wrapper.innerHTML = projectVimeoAutoplay(url);
                el.appendChild(wrapper);

                const player = new Vimeo.Player(wrapper.querySelector("iframe"));
                checkVideoStatus(player, url);
            }
        });
    };

    // 🥬 Init
    document.addEventListener("DOMContentLoaded", () => {
        const options = { PRODUCTION: false, DESKTOP_BREAKPOINT: 992, RATIO: 16 / 9 };
        injectCSS();
        initFollowCursor(options);
        initLazyloadVideos(options);
    });
}