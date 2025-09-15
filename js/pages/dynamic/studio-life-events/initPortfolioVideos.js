/**
 * HYMN | portfolio video loader + cleanup
 * @build 15.08.25 @updated 14:45 PHT
 * Removes empty portfolio sections, injects CSS, and lazyloads Vimeo videos with optional cursor play icon.
 */

const HYMN_SETTINGS = {
    PRODUCTION: false,
    DESKTOP_BREAKPOINT: 992,
    RATIO: 16 / 9
};

function removeEmptyPortfolioSections() {
    let hasPortfolio = false;
    document.querySelectorAll('[data-portfolio="wrapper"]').forEach(wrapper => {
        const hasContent = Array.from(wrapper.querySelectorAll('[data-portfolio="wrap"]'))
            .some(wrap => wrap.querySelector('[data-portfolio="video"], [data-portfolio="image"]'));

        if (!hasContent) {
            const spacer = wrapper.previousElementSibling;
            if (spacer && spacer.matches('[data-portfolio="spacer"]')) spacer.remove();
            wrapper.remove();
            if (window.lenis__pageScroll && typeof window.lenis__pageScroll.resize === "function") {
                window.lenis__pageScroll.resize();
                console.log("🔄 Lenis page scroll updated after removing empty portfolio section");
            }
        } else {
            hasPortfolio = true;
        }
    });
    return hasPortfolio;
}

function getHeightPercentage(ratio) {
    return (1 / ratio * 100).toFixed(2) + "%";
}

function createWrapperRatio(ratio) {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.paddingTop = getHeightPercentage(ratio);
    return wrapper;
}

function project__vimeoAutoplay(id) {
    return `
      <iframe
        src="https://player.vimeo.com/video/${id}?dnt=1&badge=0&autopause=0&player_id=0&autoplay=1&muted=1&controls=0&loop=1"
        frameborder="0"
        allow="autoplay"
        title="HYMN"
      ></iframe>
    `;
}

function project__injectCSS() {
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
}

function project__initFollowCursor(settings) {
    if (window.innerWidth >= settings.DESKTOP_BREAKPOINT) {
        const icon = document.createElement("div");
        icon.innerHTML = "play";
        icon.id = "drag-icon__play";
        Object.assign(icon.style, {
            position: "absolute",
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.65)",
            color: "currentColor",
            borderRadius: "5px",
            pointerEvents: "none",
            opacity: "0",
            zIndex: "999"
        });
        document.body.appendChild(icon);

        const triggers = Array.from(document.querySelectorAll('[data-url*="play."]'));

        function moveIcon(e) {
            gsap.to(icon, {
                duration: 0.65,
                left: e.pageX + 10 + "px",
                top: e.pageY + 10 + "px",
                ease: "power2.out"
            });
        }

        triggers.forEach(el => {
            el.addEventListener("mouseenter", e => {
                moveIcon(e);
                gsap.to(icon, { opacity: 1, duration: 0.2 });
                window.addEventListener("mousemove", moveIcon);
            });

            el.addEventListener("mouseleave", () => {
                gsap.to(icon, { opacity: 0, duration: 0.2 });
                window.removeEventListener("mousemove", moveIcon);
            });
        });
    } else {
        console.log("Skipping cursor play icon on mobile");
    }
}

function project__init_LazyloadVideos(settings) {
    const containers = document.querySelectorAll("[data-url]");
    const totalVideos = containers.length;
    let loadedVideos = 0;

    function maybeUpdateLenis() {
        loadedVideos++;
        if (loadedVideos >= totalVideos) {
            if (window.lenis__pageScroll && typeof window.lenis__pageScroll.resize === "function") {
                window.lenis__pageScroll.resize();
                console.log(`🔄 Lenis page scroll updated after ${loadedVideos} Vimeo videos loaded`);
            }
        }
    }

    function checkVideoStatus(player, id) {
        let loadStart = performance.now();

        player.on("loaded", () => {
            console.log(`Video id ${id.includes("play.") ? id.replace("play.", "") + " (WITH CONTROLS)" : id} loaded`);
            maybeUpdateLenis();
        });

        player.on("play", () => {
            if (id.includes("play.")) {
                console.log(`Video ${id.replace("play.", "")} (AUTOPLAY) is playing 🍿`);
            } else {
                let playStart = performance.now();
                console.log(`Video id ${id} took ${((playStart - loadStart) / 1000).toFixed(3)}s from load to play 🍿`);
            }
        });

        player.on("pause", () => {
            console.log(`Video id ${id} paused`);
        });

        player.on("error", err => {
            console.error(`Video ${id} error:`, err);
            maybeUpdateLenis();
        });
    }

    containers.forEach(container => {
        let url = container.getAttribute("data-url");

        if (url.includes("play.")) {
            let originalUrl = url;
            url = url.replace("play.", "");

            let wrapper = createWrapperRatio(settings.RATIO);
            container.appendChild(wrapper);
            container.classList.add("has-pointer");

            let iframe = document.createElement("iframe");
            iframe.src = `https://player.vimeo.com/video/${url}?badge=0&autopause=0&player_id=0&muted=0&controls=1&loop=0`;
            Object.assign(iframe.style, {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            });
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; fullscreen";
            iframe.title = "HYMN";

            wrapper.appendChild(iframe);

            let player = new Vimeo.Player(iframe);
            checkVideoStatus(player, originalUrl);

            container.addEventListener("click", () => {
                player.getPaused()
                    .then(paused => paused ? player.play() : player.pause())
                    .catch(err => console.error(`Error toggling video ${url}:`, err));
            });

        } else {
            let wrapper = createWrapperRatio(settings.RATIO);
            wrapper.innerHTML = project__vimeoAutoplay(url);
            container.appendChild(wrapper);

            let iframe = container.querySelector("iframe");
            let player = new Vimeo.Player(iframe);
            checkVideoStatus(player, url);
        }
    });
}

export function initPortfolioVideos() {
    document.addEventListener("DOMContentLoaded", () => {
        const hasPortfolio = removeEmptyPortfolioSections();
        if (hasPortfolio) {
            project__injectCSS();
            project__initFollowCursor(HYMN_SETTINGS);
            project__init_LazyloadVideos(HYMN_SETTINGS);
        } else {
            console.log("⏩ Skipping video lazyload: portfolio section removed");
        }
    });
}