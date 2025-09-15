/**
 * HYMN | Main Module Loader
 * @build 15.09.25 @updated 12:51 PHT
 * Initializes all site modules in proper dependency order
 */

console.log(
    "%c🦄 Deploying main modules",
    "color: white; background: purple; padding: 2px 6px; border-radius: 3px;",
  );

// Foundation modules - must load first
import { initRouting } from 'https://hymn-design.netlify.app/js/initRouting.js?v=1.0.0';
import { initSmoothScroll } from 'https://hymn-design.netlify.app/js/initSmoothScroll.js?v=1.0.0';
import { initNavigation } from 'https://hymn-design.netlify.app/js/initNavigation.js?v=1.0.0';

// Animation & scroll modules
import { initGradientOnScroll } from 'https://hymn-design.netlify.app/js/initGradientOnScroll.js?v=1.0.0';
import { initHeaderImgScaleScrub } from 'https://hymn-design.netlify.app/js/initHeaderImgScaleScrub.js?v=1.0.0';
import { initHeadlineDown } from 'https://hymn-design.netlify.app/js/initHeadlineDown.js?v=1.0.0';
import { initProjectSubnavScroll } from 'https://hymn-design.netlify.app/js/initProjectSubnavScroll.js?v=1.0.0';
import { initNavLogoShrink } from 'https://hymn-design.netlify.app/js/initNavLogoShrink.js?v=1.0.0';

// Media & content modules
import { initLazyloadVimeo } from 'https://hymn-design.netlify.app/js/initLazyloadVimeo.js?v=1.0.0';
import { initNextImg } from 'https://hymn-design.netlify.app/js/initNextImg.js?v=1.0.0';
import { initNextHover } from 'https://hymn-design.netlify.app/js/initNextHover.js?v=1.0.0';
import { initServices } from 'https://hymn-design.netlify.app/js/initServices.js?v=1.0.0';

// Utility modules
import { initLanguageSwitcher } from 'https://hymn-design.netlify.app/js/initLanguageSwitcher.js?v=1.0.0';
import { initMailtoNewTab } from 'https://hymn-design.netlify.app/js/initMailtoNewTab.js?v=1.0.0';
import { initTransitionOverlay } from 'https://hymn-design.netlify.app/js/initTransitionOverlay.js?v=1.0.0';
import { initSeemoreCTALanguage } from 'https://hymn-design.netlify.app/js/initSeemoreCTALanguage.js?v=1.0.0';
import { initSafariIframeGuard } from 'https://hymn-design.netlify.app/js/initSafariIframeGuard.js?v=1.0.0';
import { initASCII } from 'https://hymn-design.netlify.app/js/initASCII.js?v=1.0.0';

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
    
    console.log("✅ All main modules initialized successfully");
});