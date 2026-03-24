/**
 * HYMN | initImpactSlider
 * Parses JSON data and populates impact slider cards with stats, titles, and descriptions.
 * @build 27.02.26
 * @updated 24.03.26
 */

export function initImpactSlider() {
  const jsonEl = document.querySelector('[data-impact="json"]');
  if (!jsonEl) return;

  let data;
  try {
    data = JSON.parse(jsonEl.textContent.trim());
  } catch (e) {
    console.error("Impact slider: invalid JSON", e);
    return;
  }

  const { active, cards } = data;

  const section = document.querySelector('[data-impact="section"]');
  if (!section) return;

  if (!active) {
    section.style.display = "none";
    return;
  }

  if (!cards?.length) return;

  const originalItem = document.querySelector('[data-impact="item"]');
  if (!originalItem) return;

  const parent = originalItem.parentElement;

  for (let i = 0; i < cards.length - 1; i++) {
    parent.appendChild(originalItem.cloneNode(true));
  }

  const items = parent.querySelectorAll('[data-impact="item"]');

  items.forEach((item, i) => {
    const card = cards[i];
    if (!card) return;

    const stat = item.querySelector('[data-impact="stat"]');
    const title = item.querySelector('[data-impact="title"]');
    const desc = item.querySelector('[data-impact="description"]');

    if (stat) renderStat(stat, card.stat);
    if (title) title.textContent = card.title;
    if (desc) desc.textContent = card.description;
  });
}

function renderStat(statEl, value) {
  const statValue = value.trim();

  if (!statValue.startsWith("<svg")) {
    statEl.textContent = statValue;
    return;
  }

  const computedStyle = window.getComputedStyle(statEl);
  const fontSize = computedStyle.fontSize;

  const temp = document.createElement("div");
  temp.innerHTML = statValue;

  const svg = temp.querySelector("svg");
  if (!svg) return;

  svg.removeAttribute("width");
  svg.setAttribute("height", fontSize);
  svg.style.display = "block";

  statEl.innerHTML = "";
  statEl.appendChild(svg);
}