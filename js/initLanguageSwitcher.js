/**
 * HYMN | initLanguageSwitcher
 * @build 31.08.25 @updated 01:05 PHT
 * Enables a language switcher that toggles options, stores preference, and redirects on selection.
 */

export function initLanguageSwitcher() {
    const OPTIONS = {
        PRODUCTION: true,
        DELAY: 0.65,
        TRIGGER: ".nav__wrap-switcher",
        LOCALE_ITEMS: ".locale__cl-item",
        LOCALE_LIST: ".locale__cl",
        LOCALE_LINK: ".locale__link",
    };

    const disableEventsOnLocaleItems = (selector) => {
        document.querySelectorAll(selector).forEach((item) => {
            item.style.pointerEvents = "none";
        });
    };

    const localeItems = document.querySelectorAll(OPTIONS.LOCALE_ITEMS);
    const trigger = document.querySelector(OPTIONS.TRIGGER);

    if (!document.querySelector(OPTIONS.LOCALE_LIST)) {
        console.log("⚠️ skipping language switcher");
        return;
    }

    if (!localeItems.length || !trigger) {
        console.log("⚠️ language switcher elements missing");
        return;
    }

    // Disable pointer events on locale items
    disableEventsOnLocaleItems(OPTIONS.LOCALE_ITEMS);

    // Set initial state for each locale item
    localeItems.forEach((item) => {
        const localeLink = item.querySelector(OPTIONS.LOCALE_LINK);
        if (!localeLink) return;

        const isCurrentPage = localeLink.getAttribute("aria-current") === "page";
        const languageState = isCurrentPage ? "active" : "inactive";
        item.setAttribute("data-language", languageState);
    });

    // Click event listener for trigger
    trigger.addEventListener("click", () => {
        console.log("🌐 language switch triggered");

        const inactiveLanguage = document.querySelector(
            '[data-language="inactive"]'
        );
        if (!inactiveLanguage) return;

        const targetLink = inactiveLanguage.querySelector(OPTIONS.LOCALE_LINK);
        if (!targetLink) return;

        // Toggle visibility of language options
        localeItems.forEach((item) => {
            const currentState = item.getAttribute("data-language");
            if (currentState === "active") {
                item.setAttribute("data-language", "inactive");
                item.style.display = "none";
            } else if (currentState === "inactive") {
                item.setAttribute("data-language", "active");
                item.style.display = "flex";
            }
        });

        // Store preferred language
        const chosenLang =
            targetLink.getAttribute("href") || targetLink.textContent.trim();
        localStorage.setItem("preferredLanguage", chosenLang);
        console.log("💾 Preferred language stored:", chosenLang);

        // Redirect to selected language
        setTimeout(() => {
            if (OPTIONS.PRODUCTION) {
                window.location.href = targetLink.href;
            }
            console.log("🔀 language redirection");
        }, OPTIONS.DELAY * 1000);
    });
}