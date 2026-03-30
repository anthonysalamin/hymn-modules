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
//import { initMarkeeMWG008 } from 'https://cdn.hymn.design/js/pages/static/agence/initMarkeeMWG008.js?v=1.0.0';

// on DOM loaded
document.addEventListener("DOMContentLoaded", () => {

  // core
  initClientMarquee();
  initClickDrag();
  initMethodSwitch();
  /*
    const marqueeRoot = document.querySelector('[data-mwg008="root"]');
    if (marqueeRoot) {
      initMarkeeMWG008(marqueeRoot);
      console.log(`✅ Initialized markee MWG008`);
    }
    */

  // font-dependent
  document.fonts.ready.then(() => {
    // console.log(`✅ Initialized all font-dependent modules`);
  });

  console.log(`✅ Initialized all DOM-dependent modules`);
});
