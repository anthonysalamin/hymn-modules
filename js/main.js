/**
 * HYMN | 🥭 main 
 * Handles orchestration of UI, interactions, and global behaviors on DOM ready.
 * 
 * @build 11.04.26
 * @updated 13:44 PHT
 * @author TONYTONY Sàrl
 */

console.log("%c🥭 Deploying main modules", "color: white; background: #2d6a4f; padding: 2px 6px; border-radius: 3px;");

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

// ── Runner ───────────────────────────────────────────────────────────────────

function run(label, fn) {
  try {
    fn();
  } catch (error) {
    console.error(`Ooopsi 👹 ${label} failed:`, error);
  }
}

// ── Bootstrap ────────────────────────────────────────────────────────────────

async function initApp() {
  // Foundation
  run("Routing", initRouting);
  run("SmoothScroll", initSmoothScroll);
  run("Navigation", initNavigation);

  // Basic utilities first
  run("ASCII", initASCII);
  run("TransitionOverlay", initTransitionOverlay);
  run("MailtoNewTab", initMailtoNewTab);
  run("SafariIframeGuard", initSafariIframeGuard);

  // Language & content setup
  run("LanguageSwitcher", initLanguageSwitcher);
  run("SeemoreCTALanguage", initSeemoreCTALanguage);

  // Scroll-triggered animations — depend on smooth scroll foundation
  run("GradientOnScroll", initGradientOnScroll);
  run("HeaderImgScaleScrub", initHeaderImgScaleScrub);
  run("HeadlineDown", initHeadlineDown);
  run("ProjectSubnavScroll", initProjectSubnavScroll);
  run("NavLogoShrink", initNavLogoShrink);

  // Media and interactive elements
  run("LazyloadVimeo", initLazyloadVimeo);
  run("NextImg", initNextImg);
  run("NextHover", initNextHover);
  run("Services", initServices);
  run("Blaze", initBlaze);

  console.log("✅ All main modules initialized successfully");
}

document.addEventListener("DOMContentLoaded", initApp);
