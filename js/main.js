/**
 * HYMN | modules
 * @build 13.09.25 @updated 21:42 PHT
*/

console.log("🦄 deploying main modules");

import { initRouting } from 'https://hymn-design.netlify.app/js/initRouting.js?v=1.0.0';
import { initSmoothScroll } from 'https://hymn-design.netlify.app/js/initSmoothScroll.js?v=1.0.0';
import { initNavigation } from 'https://hymn-design.netlify.app/js/initNavigation.js?v=1.0.0';
import { initLanguageSwitcher } from 'https://hymn-design.netlify.app/js/initLanguageSwitcher.js?v=1.0.0';
import { initGradientOnScroll } from 'https://hymn-design.netlify.app/js/initGradientOnScroll.js?v=1.0.0';
import { initLazyloadVimeo } from 'https://hymn-design.netlify.app/js/initLazyloadVimeo.js?v=1.0.0';
import { initProjectSubnavScroll } from 'https://hymn-design.netlify.app/js/initProjectSubnavScroll.js?v=1.0.0';
import { initNextImg } from 'https://hymn-design.netlify.app/js/initNextImg.js?v=1.0.0';
import { initNextHover } from 'https://hymn-design.netlify.app/js/initNextHover.js?v=1.0.0';
import { initHeaderImgScaleScrub } from 'https://hymn-design.netlify.app/js/initHeaderImgScaleScrub.js?v=1.0.0';
import { initMailtoNewTab } from 'https://hymn-design.netlify.app/js/initMailtoNewTab.js?v=1.0.0';
import { initHeadlineDown } from 'https://hymn-design.netlify.app/js/initHeadlineDown.js?v=1.0.0';
import { initTransitionOverlay } from 'https://hymn-design.netlify.app/js/initTransitionOverlay.js?v=1.0.0';
import { initSeemoreCTALanguage } from 'https://hymn-design.netlify.app/js/initSeemoreCTALanguage.js?v=1.0.0';
import { initServices } from 'https://hymn-design.netlify.app/js/initServices.js?v=1.0.0';
import { initNavLogoShrink } from 'https://hymn-design.netlify.app/js/initNavLogoShrink.js?v=1.0.0';
import { initSafariIframeGuard } from 'https://hymn-design.netlify.app/js/initSafariIframeGuard.js?v=1.0.0';
import { initASCII } from 'https://hymn-design.netlify.app/js/initASCII.js?v=1.0.0';

/**
 * UTILITY | initRouting
 * @build 13.09.25 @updated 22:35 PHT
 * Automatically redirects users to the English version if their browser language isn’t French and no preference is stored.
 */

initRouting();
console.log("✅ initialized initRouting");

/**
 * HYMN | initSmoothScroll
 * @build 15.08.25 @updated 22:40 PHT
 * Initializes smooth scrolling with Lenis and integrates it with ScrollTrigger, handling dynamic content resizing.
 */

initSmoothScroll();
console.log("✅ initialized initSmoothScroll");

/**
 * HYMN | initNavigation
 * @build 14.08.25 @updated 23:40 PHT
 * Navigation module for HYMN, handling menu open/close, scroll lock, overlays, and seemore parallax, fully integrated with Lenis and GSAP ScrollTrigger.
 */

initNavigation();
console.log("✅ initialized initNavigation");

/**
 * UTILITY | initASCII
 * @build 02.10.21 @updated 23:32
 * Inserts a decorative ASCII art comment into the page’s HTML.
 */

document.addEventListener("DOMContentLoaded", () => {
    initASCII();
    console.log("✅ initialized initASCII");
});

/**
 * HYMN | initGradientOnScroll
 * @build 13.09.25 @updated 23:36 PHT
 * Fades in a header gradient as the page is scrolled using GSAP ScrollTrigger.
 */

document.addEventListener("DOMContentLoaded", () => {
    initGradientOnScroll();
    console.log("✅ initialized initGradientOnScroll");
});

/**
 * HYMN | initLazyloadVimeo
 * @build 04.11.24 @updated 23:45 PHT
 * Lazy-loads Vimeo videos and autoplays them when scrolled into view using ScrollTrigger.
 */

document.addEventListener("DOMContentLoaded", () => {
    initLazyloadVimeo();
    console.log("✅ initialized initLazyloadVimeo");
});

/**
 * HYMN | initProjectSubnavScroll
 * @build 19.11.24 @updated 23:55 PHT
 * Switches between two subnav groups with smooth fade and slide animations based on scroll direction.
 */

document.addEventListener("DOMContentLoaded", () => {
    initProjectSubnavScroll();
    console.log("✅ initialized initProjectSubnavScroll");
});

/**
 * HYMN | initNextImg
 * @build 16.09.24 @updated 23:59 PHT
 * Animates the “next” image into view with a scroll-triggered upward movement and fade-in effect.
 */

document.addEventListener("DOMContentLoaded", () => {
    initNextImg();
    console.log("✅ initialized initNextImg");
});

/**
 * HYMN | initNextHover
 * @build 04.09.24 @updated 23:59 PHT
 * Adds a hover effect that scales the “next” image up on mouse enter and back on mouse leave.
 */

document.addEventListener("DOMContentLoaded", () => {
    initNextHover();
    console.log("✅ initialized initNextHover");
});

/**
 * HYMN | initHeaderImgScaleScrub
 * @build 07.08.25 @updated 13.09.25 @23:59 PHT
 * Animates header image scaling, gradient height, and video opacity on scroll using GSAP.
 */
document.addEventListener("DOMContentLoaded", () => {
    initHeaderImgScaleScrub();
    console.log("✅ initialized initHeaderImgScaleScrub");
});

/**
 * UTILITY | initMailtoNewTab
 * @build 04.09.24 @updated 23:59 PHT
 * Opens mailto links in a new browser tab instead of the current one.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMailtoNewTab();
    console.log('✅ initialized initMailtoNewTab');
});

/**
 * HYMN | initHeadlineDown
 * @build 18.09.24 @updated 23:59 PHT
 * Animates a headline moving down as the page scrolls using GSAP ScrollTrigger.
 */

document.addEventListener("DOMContentLoaded", () => {
    initHeadlineDown();
    console.log("✅ initialized initHeadlineDown");
});

/**
 * UTILITY | initTransitionOverlay
 * @build 04.11.24 @updated 23:59 PHT
 * Fades out and hides a page transition overlay after a short delay.
 */

document.addEventListener("DOMContentLoaded", () => {
    initTransitionOverlay();
    console.log("✅ initialized initTransitionOverlay");
});

/**
 * HYMN | initSeemoreCTALanguage
 * @build 17.12.24 @updated 23:59 PHT
 * Sets the “See More” portfolio CTA link according to the page language (English or default).
 */

document.addEventListener("DOMContentLoaded", () => {
    initSeemoreCTALanguage();
    console.log("✅ initialized initSeemoreCTALanguage");
});

/**
 * HYMN | initServices
 * @build 18.09.24 @updated 00:08 PHT
 * Enables draggable service boxes with animated scaling and updates the main service image as items scroll into view.
 */

document.addEventListener("DOMContentLoaded", () => {
    initServices();
    console.log("✅ initialized initServices");
});

/**
 * HYMN | initNavLogoShrink
 * @build 10.09.24 @updated 00:42 PHT
 * Mobile nav logo shrink/expand on scroll using GSAP ScrollTrigger, active only on screens ≤479px.
 */

document.addEventListener("DOMContentLoaded", () => {
    initNavLogoShrink();
    console.log("✅ initialized initNavLogoShrink");
});

/**
 * UTILITY | initSafariIframeGuard
 * @build 15.08.25 @updated 00:50 PHT
 * Adds a temporary overlay on Vimeo/YouTube iframes in Safari to prevent accidental scroll hijacking.
 */

document.addEventListener("DOMContentLoaded", () => {
    initSafariIframeGuard();
    console.log("✅ initialized initSafariIframeGuard");
});

/**
 * HYMN | initLanguageSwitcher
 * @build 31.08.25 @updated 01:05 PHT
 * Enables a language switcher that toggles options, stores preference, and redirects on selection.
 */

document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    console.log("✅ initialized initLanguageSwitcher");
});