/**
 * HYMN | initApp (main module)
 * Bootstraps feature modules on DOM ready, then fonts and scroll motion after a short delay.
 * @build 11.04.26
 * @updated 13:44 PHT
 * @author TONYTONY Sàrl
 */

console.log(
    "%c🦄 Deploying main modules",
    "color: white; background: purple; padding: 2px 6px; border-radius: 3px;",
  );

// Foundation modules
import { initRouting } from 'https://cdn.hymn.design/js/initRouting.js?v=1.0.0';
import { initSmoothScroll } from 'https://cdn.hymn.design/js/initSmoothScroll.js?v=1.0.0';
import { initNavigation } from 'https://cdn.hymn.design/js/initNavigation.js?v=1.0.0';

// Animation & scroll modules
import { initGradientOnScroll } from 'https://cdn.hymn.design/js/initGradientOnScroll.js?v=1.0.0';
import { initHeaderImgScaleScrub } from 'https://cdn.hymn.design/js/initHeaderImgScaleScrub.js?v=1.0.0';
import { initHeadlineDown } from 'https://cdn.hymn.design/js/initHeadlineDown.js?v=1.0.0';
import { initProjectSubnavScroll } from 'https://cdn.hymn.design/js/initProjectSubnavScroll.js?v=1.0.0';
import { initNavLogoShrink } from 'https://cdn.hymn.design/js/initNavLogoShrink.js?v=1.0.0';

// Media & content modules
import { initLazyloadVimeo } from 'https://cdn.hymn.design/js/initLazyloadVimeo.js?v=1.0.0';
import { initNextImg } from 'https://cdn.hymn.design/js/initNextImg.js?v=1.0.0';
import { initNextHover } from 'https://cdn.hymn.design/js/initNextHover.js?v=1.0.0';
import { initServices } from 'https://cdn.hymn.design/js/initServices.js?v=1.0.0';

// Utility modules
import { initLanguageSwitcher } from 'https://cdn.hymn.design/js/initLanguageSwitcher.js?v=1.0.0';
import { initMailtoNewTab } from 'https://cdn.hymn.design/js/initMailtoNewTab.js?v=1.0.0';
import { initTransitionOverlay } from 'https://cdn.hymn.design/js/initTransitionOverlay.js?v=1.0.0';
import { initSeemoreCTALanguage } from 'https://cdn.hymn.design/js/initSeemoreCTALanguage.js?v=1.0.0';
import { initSafariIframeGuard } from 'https://cdn.hymn.design/js/initSafariIframeGuard.js?v=1.0.0';
import { initASCII } from 'https://cdn.hymn.design/js/initASCII.js?v=1.0.0';
import { initBlaze } from 'https://cdn.hymn.design/js/initBlaze.js?v=1.0.0';

// Foundation modules
initRouting();
initSmoothScroll();
initNavigation();

// DOM-dependent modules
document.addEventListener("DOMContentLoaded", () => {
    // Basic utilities first
    initASCII();
    initTransitionOverlay();
    initMailtoNewTab();
    initSafariIframeGuard();
    
    // Language & content setup
    initLanguageSwitcher();
    initSeemoreCTALanguage();
    
    // Scroll-triggered animations - depend on smooth scroll foundation
    initGradientOnScroll();
    initHeaderImgScaleScrub();
    initHeadlineDown();
    initProjectSubnavScroll();
    initNavLogoShrink();
    
    // Media and interactive elements
    initLazyloadVimeo();
    initNextImg();
    initNextHover();
    initServices();
    initBlaze();
    
    console.log("✅ All main modules initialized successfully");
});