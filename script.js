/**
 * script.js
 * Renders universes/items from data.js, tracks which items are checked,
 * and updates the per-universe bars + overall ring.
 *
 * State lives in memory for this session. To persist across page loads,
 * swap `state` for a localStorage-backed store — see README.md.
 */

(function () {
  "use strict";

  const RING_CIRCUMFERENCE = 2 * Math.PI * 86; // matches r=86 in the SVG

  const ICONS = {
    bolt: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="#0b0d12"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" fill="#0b0d12"/></svg>',
    wand: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 21 15 9M17 3l1.5 3.5L22 8l-3.5 1.5L17 13l-1.5-3.5L12 8l3.5-1.5L17 3Z" stroke="#0b0d12" stroke-width="1.6" stroke-linejoin="round" fill="#0b0d12"/></svg>',
  };

  // itemId -> boolean
  const state = Object.create(null);

  const universesEl = document.getElementById("universes");
  const universeTpl = document.getElementById("universeTemplate");
  const groupTpl = document.getElementById("groupTemplate");
  const itemTpl = document.getElementById("itemTemplate");

  function allItems() {
    return UNIVERSES.flatMap((u) => u.groups.flatMap((g) => g.items));
  }

  function render() {
    universesEl.innerHTML = "";

    UNIVERSES.forEach((universe) => {
      const node = universeTpl.content.cloneNode(true);
      const section = node.querySelector(".universe");
      section.dataset.universe = universe.id;
      section.style.setProperty("--accent", universe.accent);
      section.style.setProperty("--accent-2", universe.accent2);

      node.querySelector(".universe-icon").innerHTML = ICONS[universe.icon] || "";
      node.querySelector(".universe-name").textContent = universe.name;
      node.querySelector(".universe-count").textContent = universe.tagline;

      const groupsEl = node.querySelector(".universe-groups");

      universe.groups.forEach((group) => {
        const groupNode = groupTpl.content.cloneNode(true);
        groupNode.querySelector(".group-title").textContent = group.title;
        const list = groupNode.querySelector(".item-list");

        group.items.forEach((item) => {
          const itemNode = itemTpl.content.cloneNode(true);
          const checkbox = itemNode.querySelector(".item-checkbox");
          checkbox.id = item.id;
          checkbox.checked = !!state[item.id];
          checkbox.addEventListener("change", () => {
            state[item.id] = checkbox.checked;
            updateProgress();
          });

          const label = itemNode.querySelector(".item-label");
          label.setAttribute("for", item.id);

          itemNode.querySelector(".item-title").textContent = item.title;
          itemNode.querySelector(".item-year").textContent = item.year;

          list.appendChild(itemNode);
        });

        groupsEl.appendChild(groupNode);
      });

      universesEl.appendChild(node);
    });

    updateProgress();
  }

  function updateProgress() {
    // Per-universe bars
    document.querySelectorAll(".universe").forEach((section) => {
      const universe = UNIVERSES.find((u) => u.id === section.dataset.universe);
      const items = universe.groups.flatMap((g) => g.items);
      const done = items.filter((i) => state[i.id]).length;
      const pct = items.length ? Math.round((done / items.length) * 100) : 0;

      section.querySelector(".universe-bar-fill").style.width = pct + "%";
      section.querySelector(".universe-count").textContent =
        `${universe.tagline} · ${done}/${items.length} watched`;
    });

    // Overall ring
    const items = allItems();
    const done = items.filter((i) => state[i.id]).length;
    const pct = items.length ? done / items.length : 0;
    const ring = document.getElementById("ringProgress");
    ring.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - pct));

    document.getElementById("overallPct").textContent = Math.round(pct * 100) + "%";
    document.getElementById("overallCount").textContent = `${done} / ${items.length} watched`;
  }

  document.getElementById("resetAll").addEventListener("click", () => {
    if (!confirm("Reset all checked-off progress?")) return;
    Object.keys(state).forEach((k) => delete state[k]);
    render();
  });

  render();
})();
