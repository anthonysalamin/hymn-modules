/**
 * HYMN | modules
 * @build 14.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying projets modules");

import { initRemoveEmptyVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initRemoveEmptyVideos.js?v=1.0.0';
import { initRemoveEmptyImages } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initRemoveEmptyImages.js?v=1.0.0';
import { initCtaTextIcon } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initCtaTextIcon.js?v=1.0.0';
import { initLazyloadVimeo } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initLazyloadVimeo.js?v=1.0.0';
import { initListAnchor } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initListAnchor.js?v=1.0.0';

/**
 * UTILITY | initRemoveEmptyVideos
 * @build 06.01.25 @updated 21:14 PHT
 * * It removes all video containers without a data-url attribute and refreshes Lenis page scroll once the DOM is loaded.
 */
initRemoveEmptyVideos();
console.log("✅ initialized initRemoveEmptyVideos");

/**
 * UTILITY | initRemoveEmptyImages
 * @build 13.08.25 @updated 17:54 PHT
 * It removes all invisible portfolio images from the DOM and refreshes Lenis page scroll once the DOM is loaded.
 */
initRemoveEmptyImages();
console.log("✅ initialized initRemoveEmptyImages");

/**
 * HYMN | initCtaTextIcon
 * @build 11.09.24 @updated 22:35 PHT
 * Toggles the CTA button text between "Info" and "Close" with icon rotation based on state and language.
 */
initCtaTextIcon();
console.log("✅ initialized initCtaTextIcon");

/**
 * HYMN | initLazyloadVimeo v2.7.6.1
 * @build 06.11.24 @updated 18:51 PHT
 * lazy-loads Vimeo videos with autoplay, cursor interaction, responsive wrappers, and status logging.
 */
initLazyloadVimeo();

/**
 * HYMN | initListAnchor
 * @build 11.09.24 @updated 22:28 PHT
 * Handles anchor list button states and smooth scrolling inside a container.
 */
document.addEventListener("DOMContentLoaded", () => {
    initListAnchor();
    console.log("✅ initialized initListAnchor");
});