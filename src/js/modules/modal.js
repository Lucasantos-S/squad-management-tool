import { ClearInput } from "../main.js";
const buttonModal = document.querySelector(".btn-modal");
const modalContainer = document.querySelector(".modal-container");

export const activeModal = () => modalContainer.classList.add("active");
["touchstart", "click"].forEach((event) => {
  buttonModal.addEventListener(event, activeModal);
});

export const closeModal = () => {
  modalContainer.classList.remove("active");
  document.getElementById("name").dataset.index = "new";
  ClearInput();
};
document.querySelector(".close-modal").addEventListener("click", closeModal);
