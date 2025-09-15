/**
 * HYMN | initFilter v9
 * Adds interactive filtering for projects with grid view toggles, reset button, and MixItUp animations.
 * @build 16.12.24 @updated 23:56 PHT
 */

export function initFilter() {
    // -----------------------------
    // Helpers
    // -----------------------------
    function escapeDigit(str) {
        return /^\d/.test(str) ? `escape${str}` : str;
    }

    function cleanAndTransformString(str) {
        const map = { ä: "a", Ä: "a", à: "a", À: "a", é: "e", É: "e", è: "e", È: "e", ö: "o", Ö: "o", ü: "u", Ü: "u" };
        let result = str;
        for (const key in map) {
            result = result.replace(new RegExp(key, "g"), map[key]);
        }
        return result.replace(/[^a-zA-Z0-9-]/g, "").toLowerCase();
    }

    function checkLanguage() {
        return /^\/en\//.test(window.location.pathname);
    }

    // -----------------------------
    // Grid view toggle
    // -----------------------------
    function switchGridView() {
        const viewFiltered = document.querySelector(".view__filtered");
        const viewDesigned = document.querySelector(".view__designed");
        const filters = document.querySelectorAll(".filter");

        if (!viewFiltered || !viewDesigned) {
            console.log("skipping grid views switching");
            return;
        }

        let isFiltered = false;

        filters.forEach((filter) => {
            filter.addEventListener("click", () => {
                console.clear();
                if (filter.dataset.mixitup === "reset") {
                    console.log("view designed");
                    viewDesigned.style.display = "block";
                    viewFiltered.style.display = "none";
                    isFiltered = false;
                } else if (!isFiltered) {
                    console.log("view filtered");
                    viewDesigned.style.display = "none";
                    viewFiltered.style.display = "block";
                    isFiltered = true;
                }
            });
        });
    }

    // -----------------------------
    // Inject reset button
    // -----------------------------
    function injectResetbtn(opts) {
        let text = checkLanguage() ? "All" : "Tout";
        const control = document.querySelector(opts.control);
        const html = `<div data-mixitup="reset" class="filter checked"><div class="filter__text center">${text}</div></div>`;
        control.insertAdjacentHTML("afterbegin", html);
        switchGridView();
    }

    // -----------------------------
    // Set data attributes
    // -----------------------------
    function setDataAttribute(opts) {
        const control = document.querySelector(opts.control);
        const filters = control.querySelectorAll(opts.filter);
        filters.forEach((el) => {
            el.setAttribute("data-filter", `.${escapeDigit(cleanAndTransformString(el.textContent))}`);
        });
    }

    function categToClass(opts) {
        const targets = document.querySelectorAll(opts.target);
        targets.forEach((target) => {
            const categories = target.querySelectorAll(opts.category);
            categories.forEach((cat) => {
                target.classList.add(escapeDigit(cleanAndTransformString(cat.textContent)));
            });
        });
    }

    function btnChecked(opts) {
        const resetBtn = document.querySelector(opts.reset);
        const filters = document.querySelectorAll(opts.filter);
        filters.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const current = e.currentTarget;
                if (!current.classList.contains("checked")) {
                    const prev = document.querySelector(".filter.checked");
                    if (prev) prev.classList.remove("checked");
                    current.classList.add("checked");
                }
            });
        });
    }

    // -----------------------------
    // Initialize MixItUp
    // -----------------------------
    function initMixitup(opts) {
        const containerEl = document.querySelector(opts.container);
        if (!containerEl) return;

        const mixer = mixitup(containerEl, {
            multifilter: { enable: false },
            controls: { toggleLogic: "and" },
            selectors: { target: opts.target, control: opts.filter },
            load: { filter: "all" },
            animation: {
                queue: true,
                queueLimit: 10,
                duration: 450,
                nudge: true,
                reverseOut: true,
                effects: "fade scale(0.77) translateZ(-68px) stagger(6ms)"
            },
            callbacks: {
                onMixStart: () => {
                    document.querySelector("#status").textContent = "Un instant...";
                },
                onMixEnd: () => {
                    const total = mixer.getState().totalShow;
                    const statusEl = document.querySelector("#status");
                    if (statusEl) statusEl.textContent = ` ${total} projet${total > 1 ? "s" : ""}`;
                },
                onMixFail: () => {
                    const statusEl = document.querySelector("#status");
                    if (statusEl) statusEl.textContent = "🥹 Aucun résultat";
                    console.log("error");
                    setTimeout(() => mixer.filter("all"), 400);
                }
            }
        });

        // Reset button
        const resetBtn = document.querySelector(opts.reset);
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                resetBtn.classList.add("checked");
                mixer.filter("all");
                const filters = document.querySelectorAll(opts.filter);
                filters.forEach((btn) => btn.classList.remove("checked"));
            });
        }
    }

    // -----------------------------
    // DOMContentLoaded
    // -----------------------------
    document.addEventListener("DOMContentLoaded", () => {
        const OPTIONS = {
            status: '[data-mixitup="status"]',
            control: '[data-mixitup="control"]',
            container: '[data-mixitup="container"]',
            filter: "[data-filter]",
            target: '[data-mixitup="mix"]',
            category: '[data-mixitup="category"]',
            reset: '[data-mixitup="reset"]'
        };

        injectResetbtn(OPTIONS);
        setDataAttribute(OPTIONS);
        categToClass(OPTIONS);
        btnChecked(OPTIONS);
        initMixitup(OPTIONS);

        console.log(`Is the language english ? ${checkLanguage()}`);
    });
}