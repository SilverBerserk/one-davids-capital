import "./contacte.css";
import html from "./contacte.html?raw";

export function mountContacte(root) {
  if (!root) return;
  root.innerHTML = html;

  const form = root.querySelector("#contactForm");
  const note = root.querySelector("#formNote");

  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      note.textContent =
        "Mulțumim! Cererea ta a fost trimisă. Te vom contacta în curând.";
      form.reset();
    });
  }
}
