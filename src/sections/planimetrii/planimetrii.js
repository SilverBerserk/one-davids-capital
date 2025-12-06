import "./planimetrii.css";
import html from "./planimetrii.html?raw";
import { mountAptModal } from "../../components/modal/apt-modal.js";

// configurare planuri apartamente
// (poți adăuga câte vrei; imaginile pot fi reale PNG-uri)
const apartmentPlans = {
  // Bloc B – apare primul în UI
  "b-01": {
    title: "Apartament 2 camere B-01",
    meta: "Bloc B • ~65 m² • 2 camere",
    image: "/plans/apartments/b-01.png",
  },
  "b-02": {
    title: "Apartament 1 cameră B-02",
    meta: "Bloc B • ~40 m² • 1 cameră",
    image: "/plans/apartments/b-02.png",
  },

  // Bloc A – al doilea
  "a-01": {
    title: "Apartament 2 camere A-01",
    meta: "Bloc A • ~68 m² • 2 camere",
    image: "/plans/apartments/a-01.png",
  },
  "a-02": {
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

  const { openApartment } = mountAptModal(); // 🔥 modal ready

  root.querySelectorAll(".apt-shape").forEach((shape) => {
    const id = shape.dataset.aptId;

    shape.addEventListener("click", () => {
      openApartment(apartmentPlans[id]);
    });
  });
}
