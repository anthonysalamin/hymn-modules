/**
 * HYMN | modules
 * @build 13.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying main modules");

import { initRouting } from 'https://hymn-design.netlify.app/js/initRouting.js?v=1.0.0';
import { initASCII } from 'https://hymn-design.netlify.app/js/initASCII.js?v=1.0.0';
import { initGradientOnScroll } from 'https://hymn-design.netlify.app/js/initGradientOnScroll.js?v=1.0.0';
import { initLazyloadVimeo } from 'https://hymn-design.netlify.app/js/initLazyloadVimeo.js?v=1.0.0';
import { initProjectSubnavScroll } from 'https://hymn-design.netlify.app/js/initProjectSubnavScroll.js?v=1.0.0';
import { initNextImg } from 'https://hymn-design.netlify.app/js/initNextImg.js?v=1.0.0';
import { initNextHover } from 'https://hymn-design.netlify.app/js/initNextHover.js?v=1.0.0';
import { initHeaderImgScaleScrub } from 'https://hymn-design.netlify.app/js/initHeaderImgScaleScrub.js?v=1.0.0';
import { initMailtoNewTab } from 'https://hymn-design.netlify.app/js/initMailtoNewTab.js?v=1.0.0';
import { initHeadlineDown } from 'https://hymn-design.netlify.app/js/initHeadlineDown.js?v=1.0.0';

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
    console.log("✅ initialized initGradientOnScroll");
});

/**
 * HYMN | initLazyloadVimeo
 * @build 04.11.24 @updated 13.09.25 @23:45 PHT
 */
document.addEventListener("DOMContentLoaded", () => {
    initLazyloadVimeo();
    console.log("✅ initialized initLazyloadVimeo");
});

/**
* HYMN | initProjectSubnavScroll
* @build 19.11.24 @updated 13.09.25 @23:55 PHT
*/
document.addEventListener("DOMContentLoaded", () => {
    initProjectSubnavScroll();
    console.log("✅ initialized initProjectSubnavScroll");
});

/**
 * HYMN | initNextImg
 * @build 16.09.24 @updated 13.09.25 @23:59 PHT
 */
document.addEventListener("DOMContentLoaded", () => {
    initNextImg();
    console.log("✅ initialized initNextImg");
});

/**
 * HYMN | initNextHover
 * @build 04.09.24 @updated 13.09.25 @23:59 PHT
 */
document.addEventListener("DOMContentLoaded", () => {
    initNextHover();
    console.log("✅ initialized initNextHover");
});

/**
 * HYMN | initHeaderImgScaleScrub
 * @build 07.08.25 @updated 13.09.25 @23:59 PHT
 */
document.addEventListener("DOMContentLoaded", () => {
    initHeaderImgScaleScrub();
    console.log("✅ initialized initHeaderImgScaleScrub");
});

/**
 * UTILITY | initMailtoNewTab
 * @build 07.08.25 @updated 13.09.25 @23:59 PHT
 */
document.addEventListener('DOMContentLoaded', () => {
    initMailtoNewTab();
    console.log('✅ initialized initMailtoNewTab');
});

/**
 * HYMN | initHeadlineDown
 * @build 18.09.24 @updated 13.09.25 @23:59 PHT
 */
document.addEventListener("DOMContentLoaded", () => {
    initHeadlineDown();
    console.log("✅ initialized initHeadlineDown");
});