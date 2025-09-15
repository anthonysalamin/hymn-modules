/**
 * HYMN | modules
 * @build 14.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying studio-life-events modules");

import { initRemoveEmptyVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initRemoveEmptyVideos.js?v=1.0.0';
import { initRemoveEmptyImages } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initRemoveEmptyImages.js?v=1.0.0';
import { initPortfolioVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initPortfolioVideos.js?v=1.0.0';
import { initPackery } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initPackery.js?v=1.0.0';

/**
 * UTILITY | remove empty videos
 * @build 06.01.25 @updated 21:14 PHT
 * Removes all <div> elements with empty data-url attributes and updates Lenis page scroll
 */
initRemoveEmptyVideos();
console.log("✅ initialized initRemoveEmptyVideos");

/**
 * UTILITY | initRemoveEmptyImages
 * @build 13.08.25 @updated 17:54 PHT
 * Removes all images with the class .w-condition-invisible and updates Lenis page scroll
 */
initRemoveEmptyImages();
console.log("✅ initialized initRemoveEmptyImages");

/**
 * HYMN | portfolio video loader + cleanup
 * @build 15.08.25 @updated 14:45 PHT
 * Removes empty portfolio sections, injects CSS, and lazyloads Vimeo videos with optional cursor play icon.
 */
initPortfolioVideos();
console.log("✅ initialized initPortfolioVideos");

/**
 * HYMN | initPackery v4.1
 * @build 15.08.25 @updated 11:27 PHT
 * Initializes Packery grid layout and updates Lenis scroll after images load.
 */
initPackery();
console.log("✅ initialized initPackery");
