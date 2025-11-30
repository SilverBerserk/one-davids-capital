import "./despre.css";
import html from "./despre.html?raw";

export function mountDespre(root) {
  if (!root) return;
  root.innerHTML = html;
}
