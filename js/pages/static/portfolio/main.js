/**
 * HYMN | 🥭 main 
 * Handles orchestration of UI, interactions, and global behaviors on DOM ready.
 * 
 * @build 05.05.26
 * @updated 23:04 PHT
 * @author TONYTONY Sàrl
 */

console.log("%c🥭 Deploying main portfolio modules", "color: white; background: #2d6a4f; padding: 2px 6px; border-radius: 3px;");

import { initFilter } from 'https://cdn.hymn.design/js/pages/static/portfolio/initFilter.js?v=1.0.0';

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
    run("initFilter", initFilter);
    console.log("✅ All portfolio main modules initialized successfully");
  }
  
  document.addEventListener("DOMContentLoaded", initApp);
  