/**
 * HYMN | modules
 * @build 14.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying studio-life-events modules");

import { initRemoveEmptyVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initRemoveEmptyVideos.js?v=1.0.0';

/**
 * UTILITY | remove empty videos
 * @build 06.01.25 @updated 21:14 PHT
 * Removes all <div> elements with empty data-url attributes and updates Lenis page scroll
 */
initRemoveEmptyVideos();
console.log("✅ initialized initRemoveEmptyVideos");
