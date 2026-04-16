(function () {
  "use strict";

  const OPEN_HOUR = 9;
  const CLOSE_HOUR = 23;

  function updateStatusBadge() {
    const badge = document.querySelector("[data-status-badge]");
    if (!badge) return;
    const h = new Date().getHours();
    const isOpen = h >= OPEN_HOUR && h < CLOSE_HOUR;
    badge.classList.toggle("closed", !isOpen);
    const label = badge.querySelector(".label");
    if (label) label.textContent = isOpen ? "Şu an açık" : "Şu an kapalı";
    badge.setAttribute("aria-label", isOpen ? "Kütüphane şu an açık" : "Kütüphane şu an kapalı");
  }

  function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  function initLightbox() {
    const figures = document.querySelectorAll(".gallery-grid figure");
    if (!figures.length) return;

    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.innerHTML = '<button type="button" aria-label="Kapat">×</button><img alt="">';
    document.body.appendChild(lb);

    const lbImg = lb.querySelector("img");
    const closeBtn = lb.querySelector("button");

    function open(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      lb.classList.remove("open");
      lbImg.src = "";
      document.body.style.overflow = "";
    }

    figures.forEach((fig) => {
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      const img = fig.querySelector("img");
      const activate = () => img && open(img.currentSrc || img.src, img.alt);
      fig.addEventListener("click", activate);
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
    });

    closeBtn.addEventListener("click", close);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lb.classList.contains("open")) close();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateStatusBadge();
    setInterval(updateStatusBadge, 60_000);
    initMobileMenu();
    initLightbox();
  });
})();
