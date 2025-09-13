/**
 * HYMN | modules
 * @build 13.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying main modules");

import { initRouting } from 'https://hymn-design.netlify.app/js/initRouting.js?v=1.0.0';
import { initASCII } from 'https://hymn-design.netlify.app/js/initASCII.js?v=1.0.0';
import { initGradientOnScroll } from 'https://hymn-design.netlify.app/js/gradientOnScroll.js?v=1.0.0';

/**
 * HYMN | initRouting
 * @build 02.10.21 @updated 23:32
*/
initRouting();
console.log("✅ initialized initRouting");

/**
 * HYMN | initASCII
 * @build 02.10.21 @updated 23:32
*/
document.addEventListener("DOMContentLoaded", () => {
    initASCII();
    console.log("✅ initialized initASCII");
});

/**
 * HYMN | initGradientOnScroll
 * @build 13.09.25 @updated 23:14 PHT
 */
document.addEventListener("DOMContentLoaded", () => {
    initGradientOnScroll();
});