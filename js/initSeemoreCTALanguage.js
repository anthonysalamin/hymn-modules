/**
 * HYMN | initSeemoreCTALanguage
 * @build 17.12.24 @updated 13.09.25 @23:59 PHT
 */

export function initSeemoreCTALanguage() {
    function isEnglish() {
        return /^\/en(\/|$)/.test(window.location.pathname);
    }

    const ctaEl = document.querySelector("#seemore-cta-portfolio");
    if (!ctaEl) {
        console.log("seemore CTA not found");
        return;
    }

    let url = "/portfolio";
    if (isEnglish()) {
        url = "/en/portfolio";
    }

    ctaEl.href = url;
    console.log(ctaEl);
}