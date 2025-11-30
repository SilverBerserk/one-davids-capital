import "./hero.css";
import html from "./hero.html?raw";

export function mountHero(root) {
  if (!root) return;
  root.innerHTML = html;
}
