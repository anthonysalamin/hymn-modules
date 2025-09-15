/**
 * UTILITY | initMailtoNewTab
 * @build 04.09.24 @updated 23:59 PHT
 * Opens mailto links in a new browser tab instead of the current one.
 */

export function initMailtoNewTab() {
    function openMailtoInNewTab(event) {
        event.preventDefault();
        const mailtoLink = event.currentTarget.href;
        window.open(mailtoLink, '_blank');
    }

    const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
    mailtoLinks.forEach(link => {
        link.addEventListener('click', openMailtoInNewTab);
    });
}