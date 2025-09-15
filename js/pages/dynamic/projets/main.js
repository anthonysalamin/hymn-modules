/**
 * HYMN | projets modules
 * @build 14.09.25 @updated 21:42 PHT
*/

console.log("🦄 deploying projets modules");

import { initRemoveEmptyVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initRemoveEmptyVideos.js?v=1.0.0';
import { initRemoveEmptyImages } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initRemoveEmptyImages.js?v=1.0.0';
import { initCtaTextIcon } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initCtaTextIcon.js?v=1.0.0';
import { initLazyloadVimeo } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initLazyloadVimeo.js?v=1.0.0';
import { initListAnchor } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initListAnchor.js?v=1.0.0';

initRemoveEmptyVideos();
initRemoveEmptyImages();
initCtaTextIcon();
initLazyloadVimeo();

document.addEventListener("DOMContentLoaded", () => {
    initListAnchor();
});