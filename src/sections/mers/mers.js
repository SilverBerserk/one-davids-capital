import "./mers.css";
import html from "./mers.html?raw";

export function mountMers(root) {
  if (!root) return;
  root.innerHTML = html;
}
