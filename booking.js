/**
 * Beauty By BLOW booking service list.
 * Service information is pulled from data.js.
 */

(function () {
  "use strict";

  if (typeof SERVICES === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const preselect = params.get("service");

  const selectedId = SERVICES.some((service) => service.id === preselect)
    ? preselect
    : null;

  const pickList = document.querySelector("[data-service-pick-list]");

  if (!pickList) return;

  pickList.innerHTML = SERVICES.map((service) => `
    <div
      class="service-pick"
      ${service.id === selectedId ? 'aria-current="true"' : ""}
    >
      <span>
        <span class="name">${service.name}</span>
        <span class="meta">
          ${service.tagline} · ${service.duration}
        </span>
      </span>

      <span class="price">${service.price}</span>
    </div>
  `).join("");
})();