import "./tiktok.css";
import html from "./tiktok.html?raw";

export function mountTiktok(root) {
  if (!root) return;
  root.innerHTML = html;

  // Load TikTok embed script (must be done manually)
  const script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}
