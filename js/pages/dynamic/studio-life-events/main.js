/**
 * HYMN | studio-life-events modules
 * @build 14.09.25 @updated 21:42 PHT
*/

console.log(
    "%c🦄 Deploying studio-life-events modules",
    "color: white; background: purple; padding: 2px 6px; border-radius: 3px;",
  );

import { initRemoveEmptyVideos } from 'https://cdn.hymn.design/js/pages/dynamic/studio-life-events/initRemoveEmptyVideos.js?v=1.0.0';
import { initRemoveEmptyImages } from 'https://cdn.hymn.design/js/pages/dynamic/studio-life-events/initRemoveEmptyImages.js?v=1.0.0';
import { initPortfolioVideos } from 'https://cdn.hymn.design/js/pages/dynamic/studio-life-events/initPortfolioVideos.js?v=1.0.0';
import { initPackery } from 'https://cdn.hymn.design/js/pages/dynamic/studio-life-events/initPackery.js?v=1.0.0';

initRemoveEmptyVideos();
initRemoveEmptyImages();
initPortfolioVideos();
initPackery();
console.log("✅ All studio-life-events modules initialized successfully");