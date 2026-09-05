/**
 * Beauty By BLOW booking integration shell.
 * Set BOOKING_PROVIDER_URL to Asia's real hosted booking URL when available.
 */
(function () {
  "use strict";

  const BOOKING_PROVIDER_URL = "";
  if (typeof SERVICES === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const preselect = params.get("service");
  const selectedId = SERVICES.some((s) => s.id === preselect) ? preselect : null;
  const pickList = document.querySelector("[data-service-pick-list]");
  if (!pickList) return;

  pickList.innerHTML = SERVICES.map((s) => `
    <div class="service-pick" ${s.id === selectedId ? 'aria-current="true"' : ''}>
      <span>
        <span class="name">${s.name}</span>
        <span class="meta">${s.tagline} · ${s.duration}</span>
      </span>
      <span class="price">${s.price}</span>
    </div>`).join("");

  if (BOOKING_PROVIDER_URL) {
    const link = document.createElement("a");
    link.className = "btn btn-primary mt-2";
    link.href = BOOKING_PROVIDER_URL;
    link.textContent = "Continue to Online Booking";
    pickList.insertAdjacentElement("afterend", link);
  }
})();
