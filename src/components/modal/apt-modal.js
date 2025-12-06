import html from "./apt-modal.html?raw";
import "./apt-modal.css";

export function mountAptModal() {
  // inject modal HTML into <body> once
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html.trim();
  document.body.appendChild(wrapper.firstElementChild);

  const modal = document.getElementById("aptModal");
  const img = document.getElementById("aptModalImage");
  const titleEl = document.getElementById("aptModalTitle");
  const metaEl = document.getElementById("aptModalMeta");
  const placeholder = document.getElementById("aptModalPlaceholder");

  function openApartment(apartmentData) {
    titleEl.textContent = apartmentData.title || "Apartament";
    metaEl.textContent = apartmentData.meta || "";

    if (apartmentData.image) {
      img.src = apartmentData.image;
      img.style.display = "block";
      placeholder.style.display = "none";
    } else {
      img.style.display = "none";
      placeholder.style.display = "block";
    }

    modal.classList.add("apt-modal--open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("apt-modal--open");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-apt-modal-close]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  return { openApartment };
}
