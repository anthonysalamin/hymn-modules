/**
 * HYMN | modules
 * @build 14.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying projets modules");

import { initRemoveEmptyVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initRemoveEmptyVideos.js?v=1.0.0';
import { initRemoveEmptyImages } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initRemoveEmptyImages.js?v=1.0.0';
import { initCtaTextIcon } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initCtaTextIcon.js?v=1.0.0';

/**
 * UTILITY | initRemoveEmptyVideos
 * @build 06.01.25 @updated 21:14 PHT
 */
initRemoveEmptyVideos();
console.log("✅ initialized initRemoveEmptyVideos");

/**
 * UTILITY | initRemoveEmptyImages
 * @build 13.08.25 @updated 17:54 PHT
 */
initRemoveEmptyImages();
console.log("✅ initialized initRemoveEmptyImages");

/**
 * HYMN | initCtaTextIcon
 * @build 11.09.24 @updated 22:35 PHT
 */
initCtaTextIcon();
console.log("✅ initialized initCtaTextIcon");