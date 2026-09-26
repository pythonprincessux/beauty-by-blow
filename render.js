/**
 * Beauty By BLOW shared service renderer.
 * Service information is pulled from data.js.
 */

(function () {
  "use strict";

  /**
   * Creates a reusable service card.
   */
  function serviceCardHTML(service, spanClass) {
    return `
      <article
        id="${service.id}"
        class="service-card${spanClass ? " " + spanClass : ""}"
        data-category="${service.category}"
      >
        <div class="service-media">
          <span class="service-tag">${service.tagline}</span>
        </div>

        <div class="service-body">

          <h3>${service.name}</h3>

          <p class="service-desc">
            ${service.description}
          </p>

          <div class="service-meta">
            <span>${service.duration}</span>
            <span>${service.price}</span>
          </div>

          <div class="service-actions">

            <a
              class="btn btn-secondary"
              href="services.html#${service.id}"
            >
              Learn More
            </a>

            <a
              class="btn btn-primary"
              href="book.html?service=${service.id}"
            >
              Book This Service
            </a>

          </div>

        </div>
      </article>
    `;
  }


  /* =========================================================
     SERVICES PAGE
     ========================================================= */

  const grid = document.querySelector("[data-services-grid]");

  if (grid && typeof SERVICES !== "undefined") {

    const spanPattern = [
      "span-4",
      "span-2",
      null,
      null,
      "span-4",
      "span-2",
      null,
      null
    ];

    grid.innerHTML = SERVICES.map((service, index) =>
      serviceCardHTML(
        service,
        spanPattern[index % spanPattern.length]
      )
    ).join("");


    /* Service category filters */
    const chips = document.querySelectorAll("[data-filter-chip]");

    chips.forEach((chip) => {

      chip.addEventListener("click", () => {

        chips.forEach((currentChip) => {
          currentChip.setAttribute("aria-pressed", "false");
        });

        chip.setAttribute("aria-pressed", "true");

        const filter = chip.getAttribute("data-filter-chip");

        grid
          .querySelectorAll(".service-card")
          .forEach((card) => {

            const show =
              filter === "all" ||
              card.getAttribute("data-category") === filter;

            card.classList.toggle("is-hidden", !show);

          });

      });

    });

  }


  /* =========================================================
     HOME PAGE SERVICE TEASER
     ========================================================= */

  const teaser = document.querySelector("[data-services-teaser]");

  if (teaser && typeof SERVICES !== "undefined") {

    const subset = SERVICES.slice(0, 6);

    teaser.innerHTML = subset.map((service, index) =>
      serviceCardHTML(
        service,
        index === 0 ? "span-4" : null
      )
    ).join("");

  }

})();