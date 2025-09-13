/**
 * UTILITY | routing
 * @build 13.09.25 @updated 22:35 PHT
 */

export function initRouting() {
    const USER_LANG_KEY = "preferredLanguage";

    // Check if user already picked a language manually
    const storedLang = localStorage.getItem(USER_LANG_KEY);
    // console.log(storedLang);

    // If they picked, do nothing (respect choice)
    if (storedLang) return;

    // Otherwise, detect browser language
    const lang = navigator.language || navigator.userLanguage;
    const langCode = lang.slice(0, 2).toLowerCase();

    // If not French, redirect to /en
    if (langCode !== "fr") {
        const currentPath = window.location.pathname;
        if (!currentPath.startsWith("/en")) {
            window.location.replace(`/en${currentPath}`);
        }
    }
}