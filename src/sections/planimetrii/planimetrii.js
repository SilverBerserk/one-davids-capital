import "./planimetrii.css";
import html from "./planimetrii.html?raw";

// конфиг квартир для этой секции
const apartmentPlans = {
  "A-01": {
    title: "Apartament 2 camere A-01",
    meta: "Bloc A • ~68.4 m² • 2 camere",
    image: "/plans/apartments/a-01.png",
  },
  "A-02": {
    title: "Apartament 3 camere A-02",
    meta: "Bloc A • ~82.0 m² • 3 camere",
    image: "/plans/apartments/a-02.png",
  },
  "A-03": {
    title: "Studio A-03",
    meta: "Bloc A • ~38.0 m² • 1 cameră",
    image: "/plans/apartments/a-03.png",
  },
  "B-01": {
    title: "Apartament 2 camere B-01",
    meta: "Bloc B • ~65.2 m² • 2 camere",
    image: "/plans/apartments/b-01.png",
  },
  "B-02": {
    title: "Apartament 1 cameră B-02",
    meta: "Bloc B • ~40.0 m² • 1 cameră",
    image: "/plans/apartments/b-02.png",
  },
};

export function mountPlanimetrii(root) {
  if (!root) return;

  root.innerHTML = html;

  const modal = root.querySelector("#aptModal");
  const img = root.querySelector("#aptModalImage");
  const titleEl = root.querySelector("#aptModalTitle");
  const metaEl = root.querySelector("#aptModalMeta");
  const placeholder = root.querySelector("#aptModalPlaceholder");

  // клики по квартирам
  root.querySelectorAll(".apt-hotspot").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.aptId;
      const data = apartmentPlans[id];

      if (data) {
        if (titleEl) titleEl.textContent = data.title;
        if (metaEl) metaEl.textContent = data.meta || "";
        if (img) {
          img.src = data.image;
          img.alt = data.title;
          img.style.display = "block";
        }
        if (placeholder) placeholder.style.display = "none";
      } else {
        if (titleEl) titleEl.textContent = "Apartament " + id;
        if (metaEl) metaEl.textContent = "";
        if (img) {
          img.style.display = "none";
          img.src = "";
        }
        if (placeholder) placeholder.style.display = "block";
      }

      modal.classList.add("apt-modal--open");
      document.body.style.overflow = "hidden";
    });
  });

  // закрытие модалки
  modal.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.closest("[data-apt-modal-close]")
    ) {
      modal.classList.remove("apt-modal--open");
      document.body.style.overflow = "";
    }
  });

  // esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("apt-modal--open")) {
      modal.classList.remove("apt-modal--open");
      document.body.style.overflow = "";
    }
  });
}
