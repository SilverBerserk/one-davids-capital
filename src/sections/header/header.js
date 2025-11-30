import "./header.css";
import html from "./header.html?raw";

export function mountHeader(root) {
  if (!root) return;

  root.innerHTML = html;

  const burgerBtn = root.querySelector("#burgerBtn");
  const mobileNav = root.querySelector("#mobileNav");

  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileNav.style.display === "flex";
      mobileNav.style.display = isOpen ? "none" : "flex";
    });

    mobileNav.addEventListener("click", (e) => {
      if (e.target.matches(".nav__link")) {
        mobileNav.style.display = "none";
      }
    });
  }

  // smooth scroll for header links
  root.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
