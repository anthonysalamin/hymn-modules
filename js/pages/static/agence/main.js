/**
 * HYMN | agence modules
 * @build 14.09.25 @updated 21:42 PHT
*/

console.log("🦄 deploying agence modules");

import { initClientMarquee } from 'https://hymn-design.netlify.app/js/pages/static/agence/initClientMarquee.js?v=1.0.0';
import { initClickDrag } from 'https://hymn-design.netlify.app/js/pages/static/agence/initClickDrag.js?v=1.0.0';
import { initMethodSwitch } from 'https://hymn-design.netlify.app/js/pages/static/agence/initMethodSwitch.js?v=1.0.0';

initClientMarquee();
initClickDrag();
initMethodSwitch();
console.log("✅ All page-specific modules initialized successfully");