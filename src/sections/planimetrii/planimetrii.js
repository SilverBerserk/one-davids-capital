import "./planimetrii.css";
import html from "./planimetrii.html?raw";

// configurare planuri apartamente
// (poți adăuga câte vrei; imaginile pot fi reale PNG-uri)
const apartmentPlans = {
  // Bloc B – apare primul în UI
  "B-01": {
    title: "Apartament 2 camere B-01",
    meta: "Bloc B • ~65 m² • 2 camere",
    image: "/plans/apartments/b-01.png",
  },
  "B-02": {
    title: "Apartament 1 cameră B-02",
    meta: "Bloc B • ~40 m² • 1 cameră",
    image: "/plans/apartments/b-02.png",
  },

  // Bloc A – al doilea
  "A-01": {
    title: "Apartament 2 camere A-01",
    meta: "Bloc A • ~68 m² • 2 camere",
    image: "/plans/apartments/a-01.png",
  },
  "A-02": {
    title: "Apartament 3 camere A-02",
    meta: "Bloc A • ~82 m² • 3 camere",
    image: "/plans/apartments/a-02.png",
  },
  "A-03": {
    title: "Studio A-03",
    meta: "Bloc A • ~38 m² • 1 cameră",
    image: "/plans/apartments/a-03.png",
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

  // click pe orice <g class="apt-shape">
  root.querySelectorAll(".apt-shape").forEach((shape) => {
    shape.addEventListener("click", () => {
      const id = shape.dataset.aptId;
      const data = apartmentPlans[id];

      // highlight activ
      root.querySelectorAll(".apt-shape").forEach((s) =>
        s.classList.toggle("apt-shape--active", s === shape)
      );

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

  // închidere modal
  modal.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.closest("[data-apt-modal-close]")
    ) {
      modal.classList.remove("apt-modal--open");
      document.body.style.overflow = "";
    }
  });

  // ESC pentru închidere
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("apt-modal--open")) {
      modal.classList.remove("apt-modal--open");
      document.body.style.overflow = "";
    }
  });
}
