import "./footer.css";
import html from "./footer.html?raw";

export function mountFooter(root) {
  if (!root) return;
  root.innerHTML = html;

  const yearSpan = root.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
