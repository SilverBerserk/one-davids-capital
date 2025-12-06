// main.js
import "./global.css";

import { mountHeader } from "./sections/header/header.js";
import { mountHero } from "./sections/hero/hero.js";
import { mountDespre } from "./sections/despre/despre.js";
import { mountPlanimetrii } from "./sections/planimetrii/planimetrii.js";
import { mountAmplasare } from "./sections/amplasare/amplasare.js";
import { mountMers } from "./sections/mers/mers.js";
import { mountContacte } from "./sections/contacte/contacte.js";
import { mountFooter } from "./sections/footer/footer.js";
import { mountChatbot } from "./components/chatbot/chatbot.js";

function setupElementorScrollAnimations() {
  const sections = document.querySelectorAll(".elementor-section");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("elementor-section--visible");
        obs.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.2,
    }
  );

  sections.forEach((s) => observer.observe(s));
}

window.addEventListener("DOMContentLoaded", () => {
  mountHeader(document.getElementById("header"));
  mountHero(document.getElementById("hero"));
  mountDespre(document.getElementById("despre"));
  mountPlanimetrii(document.getElementById("planimetrii"));
  mountAmplasare(document.getElementById("amplasare"));
  mountMers(document.getElementById("mers"));
  mountContacte(document.getElementById("contacte"));
  mountFooter(document.getElementById("footer"));

  mountChatbot();
  setupElementorScrollAnimations();
});
