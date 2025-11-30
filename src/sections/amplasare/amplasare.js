import "./amplasare.css";
import html from "./amplasare.html?raw";

export function mountAmplasare(root) {
  if (!root) return;
  root.innerHTML = html;
}
