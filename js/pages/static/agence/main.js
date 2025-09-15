/**
 * HYMN | modules
 * @build 14.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying agence modules");

import { initClientMarquee } from 'https://hymn-design.netlify.app/js/pages/static/agence/initClientMarquee.js?v=1.0.0';
import { initClickDrag } from 'https://hymn-design.netlify.app/js/pages/static/agence/initClickDrag.js?v=1.0.0';
import { initMethodSwitch } from 'https://hymn-design.netlify.app/js/pages/static/agence/initMethodSwitch.js?v=1.0.0';

/**
 * HYMN | initClientMarquee v2.1 (Safari)
 * Creates a continuously scrolling client logo marquee with responsive resizing.
 * @build 12.08.25 @updated 21:14 PHT
 */
initClientMarquee();
console.log("✅ initialized initClientMarquee");

/**
 * HYMN | initClickDrag v2.1
 * Enables draggable horizontal sliders with a custom drag cursor
 * @build 06.08.25 @updated 15:54
 */
initClickDrag();
console.log("✅ initialized initClickDrag");

/**
 * HYMN | initMethodSwitch v1.1
 * Enables interactive slide cards that toggle front and back content with animated transitions.
 * @build 19.09.24 @updated 12:16
 */
initMethodSwitch();
console.log("✅ initialized initMethodSwitch");