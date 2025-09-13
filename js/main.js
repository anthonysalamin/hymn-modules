/**
 * HYMN | modules
 * @build 13.09.25 @updated 21:42 PHT
*/
console.log("🦄 deploying main modules");
import { test } from 'https://hymn-design.netlify.app/js/test.js?v=1.0.0';
import { initASCII } from 'https://hymn-design.netlify.app/js/initASCII.js?v=1.0.0';

document.addEventListener("DOMContentLoaded", () => {
    test();
    console.log("✅ initialized test");
});

document.addEventListener("DOMContentLoaded", () => {
    initASCII();
    console.log("✅ initialized initASCII");
});