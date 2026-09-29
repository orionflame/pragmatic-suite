(() => {
  "use strict";
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
  const tabs = [...document.querySelectorAll("[data-pricing-tab]")];
  const panels = [...document.querySelectorAll("[data-pricing-panel]")];
  tabs.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.pricingTab;
      tabs.forEach((b) => b.classList.toggle("active", b === button));
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.pricingPanel !== target;
      });
    });
  });
  document.querySelectorAll(".studio-card").forEach((card) => {
    const tiers = [...card.querySelectorAll(".tier")];
    const price = card.querySelector("[data-tier-price]");
    const renewal = card.querySelector("[data-tier-renewal]");
    const detail = card.querySelector("[data-tier-detail]");
    const saving = card.querySelector("[data-tier-saving]");
    tiers.forEach((button) => {
      button.addEventListener("click", () => {
        tiers.forEach((b) => b.classList.toggle("active", b === button));
        if (price) price.textContent = button.dataset.price || "";
        if (renewal) renewal.textContent = button.dataset.renewal || "";
        if (detail) detail.textContent = button.dataset.detail || "";
        if (saving) {
          saving.textContent = button.dataset.saving || "";
          saving.hidden = !button.dataset.saving;
        }
      });
    });
  });
})();