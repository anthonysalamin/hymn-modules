/**
 * UTILITY | initMailtoNewTab
 * @build 04.09.24 @updated 13.09.25 @23:59 PHT
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