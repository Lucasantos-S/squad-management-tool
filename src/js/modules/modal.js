import { ClearInput } from "../main.js";
const buttonModal = document.querySelector(".btn-modal");
const modalContainer = document.querySelector(".modal-container");

export const activeModal = () => modalContainer.classList.add("active");
buttonModal.addEventListener("click", activeModal);

export const closeModal = () => {
  modalContainer.classList.remove("active");
  document.getElementById("name").dataset.index = "new";
  document.getElementById("name").classList.remove("erro");
  ClearInput();
};
document.querySelector(".close-modal").addEventListener("click", closeModal);

function teste(event) {
  event.pageY = 0;
  console.log(event.pageY);
}

window.addEventListener("scroll", teste);
