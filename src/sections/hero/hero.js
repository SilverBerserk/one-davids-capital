import "./hero.css";
import html from "./hero.html?raw";

export function mountHero(root) {
  if (!root) return;
  root.innerHTML = html;

  initHeroBackgroundCarousel();
}

function initHeroBackgroundCarousel() {
  const slides = document.querySelectorAll(".hero-carousel--bg .hero-slide");
  if (!slides.length) return;

  let index = 0;

  function show(i) {
    slides.forEach((s, idx) =>
      s.classList.toggle("hero-slide--active", idx === i)
    );
  }

  function next() {
    index = (index + 1) % slides.length;
    show(index);
  }

  show(index); // initialize
  setInterval(next, 5000); // ⏱ change every 5 seconds
}
