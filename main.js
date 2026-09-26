/**
 * Shared behavior for every page:
 * mobile navigation, scroll-reveal animations, and footer year.
 *
 * Page-specific behavior lives in its own JavaScript file.
 */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* =========================================================
     MOBILE NAVIGATION
     ========================================================= */

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

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });


  scrim?.addEventListener("click", closeMenu);

  closeBtn?.addEventListener("click", closeMenu);


  document
    .querySelectorAll("[data-mobile-panel] a")
    .forEach((link) => {
      link.addEventListener("click", closeMenu);
    });


  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });


  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length) {

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {

      revealElements.forEach((element) => {
        element.classList.add("is-visible");
      });

    } else {

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }

          });

        },
        {
          threshold: 0.15
        }
      );


      revealElements.forEach((element) => {
        observer.observe(element);
      });

    }

  }


  /* =========================================================
     FOOTER YEAR
     ========================================================= */

  document
    .querySelectorAll("[data-year]")
    .forEach((element) => {
      element.textContent = new Date().getFullYear();
    });

})();