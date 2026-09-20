/**
 * Shared behavior for every page: mobile nav toggle, scroll-reveal
 * animation, and footer year. Page-specific logic (services filter,
 * FAQ accordion, booking flow) lives in its own file.
 */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile navigation ---------- */
  const hamburger = document.querySelector("[data-hamburger]");
  const mobilePanel = document.querySelector("[data-mobile-panel]");
  const scrim = document.querySelector("[data-scrim]");
  const closeBtn = document.querySelector("[data-mobile-close]");

  function openMenu() {
    mobilePanel?.classList.add("is-open");
    scrim?.classList.add("is-open");
    hamburger?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    mobilePanel?.classList.remove("is-open");
    scrim?.classList.remove("is-open");
    hamburger?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  hamburger?.addEventListener("click", () => {
    const isOpen = mobilePanel?.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });
  scrim?.addEventListener("click", closeMenu);
  closeBtn?.addEventListener("click", closeMenu);
  document.querySelectorAll("[data-mobile-panel] a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => io.observe(el));
    }
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
