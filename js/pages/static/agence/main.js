/**
 * HYMN | agence modules
 * @build 14.09.25 @updated 21:42 PHT
*/

console.log(
    "%c🦄 Deploying agence modules",
    "color: white; background: purple; padding: 2px 6px; border-radius: 3px;",
  );

import { initClientMarquee } from 'https://cdn.hymn.design/js/pages/static/agence/initClientMarquee.js?v=1.0.0';
import { initClickDrag } from 'https://cdn.hymn.design/js/pages/static/agence/initClickDrag.js?v=1.0.0';
import { initMethodSwitch } from 'https://cdn.hymn.design/js/pages/static/agence/initMethodSwitch.js?v=1.0.0';

initClientMarquee();
initClickDrag();
initMethodSwitch();
console.log("✅ All agence modules initialized successfully");