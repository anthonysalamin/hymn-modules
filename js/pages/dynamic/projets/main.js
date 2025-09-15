/**
 * HYMN | modules
 * @build 14.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying projets modules");

import { initRemoveEmptyVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initRemoveEmptyVideos.js?v=1.0.0';
import { initRemoveEmptyImages } from 'https://hymn-design.netlify.app/js/pages/dynamic/projets/initRemoveEmptyImages.js?v=1.0.0';

/**
 * HYMN | initRemoveEmptyVideos
 * @build 01.12.24 @updated 13:02
 */
initRemoveEmptyVideos();
console.log("✅ initialized initRemoveEmptyVideos");

/**
 * HYMN | initRemoveEmptyImages
 * @build 01.12.24 @updated 13:02
 */
initRemoveEmptyImages();
console.log("✅ initialized initRemoveEmptyImages");