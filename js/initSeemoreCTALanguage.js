/**
 * HYMN | initSeemoreCTALanguage
 * @build 17.12.24 @updated 23:59 PHT
 * Sets the “See More” portfolio CTA link according to the page language (English or default).
 */

export function initSeemoreCTALanguage() {
    function isEnglish() {
        return /^\/en(\/|$)/.test(window.location.pathname);
    }

    const ctaEl = document.querySelector("#seemore-cta-portfolio");
    if (!ctaEl) {
        // console.log("seemore CTA not found");
        return;
    }

    let url = "/portfolio";
    if (isEnglish()) {
        url = "/en/portfolio";
    }

    ctaEl.href = url;
    // console.log(ctaEl);
}