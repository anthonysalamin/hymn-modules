/**
 * HYMN | modules
 * @build 14.09.25 @updated 21:42 PHT
*/

console.log("🦄 deploying studio-life-events modules");

import { initRemoveEmptyVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initRemoveEmptyVideos.js?v=1.0.0';
import { initRemoveEmptyImages } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initRemoveEmptyImages.js?v=1.0.0';
import { initPortfolioVideos } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initPortfolioVideos.js?v=1.0.0';
import { initPackery } from 'https://hymn-design.netlify.app/js/pages/dynamic/studio-life-events/initPackery.js?v=1.0.0';

initRemoveEmptyVideos();
initRemoveEmptyImages();
initPortfolioVideos();
initPackery();