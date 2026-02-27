/**
 * HYMN | projets modules
 * @build 14.09.25 @updated 21:42 PHT
*/

console.log(
    "%c🦄 Deploying projets modules",
    "color: white; background: purple; padding: 2px 6px; border-radius: 3px;",
  );

import { initImpactSlider } from 'https://cdn.hymn.design/js/pages/dynamic/projets/initImpactSlider.js?v=1.0.0';
import { initRemoveEmptyVideos } from 'https://cdn.hymn.design/js/pages/dynamic/projets/initRemoveEmptyVideos.js?v=1.0.0';
import { initRemoveEmptyImages } from 'https://cdn.hymn.design/js/pages/dynamic/projets/initRemoveEmptyImages.js?v=1.0.0';
import { initCtaTextIcon } from 'https://cdn.hymn.design/js/pages/dynamic/projets/initCtaTextIcon.js?v=1.0.0';
import { initLazyloadVimeo } from 'https://cdn.hymn.design/js/pages/dynamic/projets/initLazyloadVimeo.js?v=1.0.0';
import { initListAnchor } from 'https://cdn.hymn.design/js/pages/dynamic/projets/initListAnchor.js?v=1.0.0';

initImpactSlider();
initRemoveEmptyVideos();
initRemoveEmptyImages();
initCtaTextIcon();
initLazyloadVimeo();

document.addEventListener("DOMContentLoaded", () => {
    initListAnchor();
    console.log("✅ All projets modules initialized successfully");
});