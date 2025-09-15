/**
 * HYMN | initPackery v4.1
 * @build 15.08.25 @updated 11:27 PHT
 * Initializes Packery grid layout and updates Lenis scroll after images load.
 */

function applyGridItemSize(img, counter, total, callback) {
    const gridItem = img.closest(".packery__grid-item");
    const ratio = img.naturalWidth / img.naturalHeight;
    if (ratio >= 1.3) {
        gridItem.classList.add("packery__grid-item--large");
    } else {
        gridItem.classList.add("packery__grid-item--small");
    }
    counter.count++;
    if (counter.count === total) callback();
}

function initPackeryLayout() {
    const grid = document.querySelector(".packery__grid");
    if (!grid) return;

    const images = Array.from(grid.querySelectorAll(".packery__img"));
    const counter = { count: 0 };

    function finalizeLayout() {
        const pckry = new Packery(grid, {
            itemSelector: ".packery__grid-item",
            gutter: 10,
            percentPosition: true,
            columnWidth: ".packery__grid-item--small"
        });
        pckry.layout();

        if (window.lenis__pageScroll && typeof window.lenis__pageScroll.resize === "function") {
            window.lenis__pageScroll.resize();
            console.log("🔄 Lenis page scroll updated after Packery layout");
        }
    }

    if (images.length === 0) {
        finalizeLayout();
    } else {
        images.forEach(img => {
            if (img.complete) {
                applyGridItemSize(img, counter, images.length, finalizeLayout);
            } else {
                img.onload = () => applyGridItemSize(img, counter, images.length, finalizeLayout);
                img.onerror = () => applyGridItemSize(img, counter, images.length, finalizeLayout);
            }
        });
    }
}

export function initPackery() {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(initPackeryLayout, 100);
    });
}