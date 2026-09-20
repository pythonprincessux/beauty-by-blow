/**
 * Reads from data.js and renders shared UI blocks: service cards,
 * the portfolio masonry, and testimonial notes. Any page can opt in
 * by including a container with the matching data-attribute.
 */
(function () {
  "use strict";

  function serviceCardHTML(service, spanClass) {
    return `
      <article id="${service.id}" class="service-card${spanClass ? " " + spanClass : ""}" data-category="${service.category}">
        <div class="service-media">
          <span class="service-tag">${service.tagline}</span>
        </div>
        <div class="service-body">
          <h3>${service.name}</h3>
          <p class="service-desc">${service.description}</p>
          <div class="service-meta">
            <span>${service.duration}</span>
            <span>${service.price}</span>
          </div>
          <div class="service-actions">
            <a class="btn btn-secondary" href="services.html#${service.id}">Learn More</a>
            <a class="btn btn-primary" href="book.html?service=${service.id}">Book This Service</a>
          </div>
        </div>
      </article>`;
  }

  /* ---------- Services grid (services.html) ---------- */
  const grid = document.querySelector("[data-services-grid]");
  if (grid && typeof SERVICES !== "undefined") {
    const spanPattern = ["span-4", "span-2", null, null, "span-4", "span-2", null, null, null];
    grid.innerHTML = SERVICES.map((s, i) => serviceCardHTML(s, spanPattern[i % spanPattern.length])).join("");

    const chips = document.querySelectorAll("[data-filter-chip]");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
        chip.setAttribute("aria-pressed", "true");
        const filter = chip.getAttribute("data-filter-chip");
        grid.querySelectorAll(".service-card").forEach((card) => {
          const show = filter === "all" || card.getAttribute("data-category") === filter;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---------- Home page teaser grid (subset) ---------- */
  const teaser = document.querySelector("[data-services-teaser]");
  if (teaser && typeof SERVICES !== "undefined") {
    const subset = SERVICES.slice(0, 6);
    teaser.innerHTML = subset.map((s, i) => serviceCardHTML(s, i === 0 ? "span-4" : null)).join("");
  }

  /* ---------- Portfolio masonry ---------- */
  const masonry = document.querySelector("[data-masonry]");
  if (masonry && typeof GALLERY_ITEMS !== "undefined") {
    const heightClass = { tall: "h-tall", short: "h-short", square: "h-square" };
    masonry.innerHTML = GALLERY_ITEMS.map(
      (g) => `
      <div class="masonry-item ${heightClass[g.size]}">
        <div role="img" aria-label="${g.label}" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#4A302C;font-weight:600;font-size:0.85rem;padding:1rem;text-align:center;">
          ${g.label}
        </div>
      </div>`
    ).join("");
  }

  /* ---------- Testimonials ---------- */
  const notes = document.querySelector("[data-notes]");
  if (notes && typeof TESTIMONIALS !== "undefined" && TESTIMONIALS.length) {
    notes.innerHTML = TESTIMONIALS.map(
      (t) => `
      <div class="note-card reveal">
        ${t.isPlaceholder ? '<span class="note-placeholder-badge">Placeholder — awaiting real reviews</span>' : ""}
        <p class="note-quote">&ldquo;${t.quote}&rdquo;</p>
        <p class="note-name">${t.name}</p>
      </div>`
    ).join("");
    // Newly injected reveal elements need observing too.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      notes.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    } else if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
        { threshold: 0.15 }
      );
      notes.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    }
  }
})();
