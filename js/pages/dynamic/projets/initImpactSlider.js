/**
 * HYMN | initImpactSlider
 * Parses JSON data and populates impact slider cards with stats, titles, and descriptions.
 * @build 27.02.26 @updated 17:52 PHT
 */

export function initImpactSlider() {
    console.log("impact slider module initialized");
    (function () {
      const jsonEl = document.querySelector('[data-impact="json"]');
      if (!jsonEl) return;
  
      let data;
      try {
        data = JSON.parse(jsonEl.textContent.trim());
      } catch (e) {
        console.error("Impact slider: invalid JSON", e);
        return;
      }
  
      const section = document.querySelector('[data-impact="section"]');
      if (!section) return;
  
      if (!data.active) {
        section.style.display = "none";
        return;
      }
  
      const cards = data.cards;
      if (!cards || !cards.length) return;
  
      const originalItem = document.querySelector('[data-impact="item"]');
      if (!originalItem) return;
  
      const parent = originalItem.parentElement;
  
      for (let i = 1; i < cards.length; i++) {
        const clone = originalItem.cloneNode(true);
        parent.appendChild(clone);
      }
  
      const items = parent.querySelectorAll('[data-impact="item"]');
      items.forEach(function (item, i) {
        if (!cards[i]) return;
  
        const stat = item.querySelector('[data-impact="stat"]');
        const title = item.querySelector('[data-impact="title"]');
        const desc = item.querySelector('[data-impact="description"]');
  
        if (stat) {
          const statValue = cards[i].stat.trim();
          if (statValue.startsWith("<svg")) {
            const temp = document.createElement("div");
            temp.innerHTML = statValue;
            const svg = temp.querySelector("svg");
            if (svg) {
              svg.setAttribute("width", "auto");
              svg.setAttribute("height", "24px");
              stat.parentNode.replaceChild(svg, stat);
            }
          } else {
            stat.textContent = statValue;
          }
        }
  
        if (title) title.textContent = cards[i].title;
        if (desc) desc.textContent = cards[i].description;
      });
    })();
  }