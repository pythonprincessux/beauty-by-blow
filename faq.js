(function () {
  "use strict";
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answerId = btn.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      answer.hidden = false; // grid-rows transition handles the visual collapse
    });
  });
})();
