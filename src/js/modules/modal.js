import { ClearInput } from "../main.js";
import {fieldReset} from "./formation";
const buttonModal = document.querySelector(".btn-modal");
const modalContainer = document.querySelector(".modal-container");

export const activeModal = () =>  {
  modalContainer.classList.add("active");
  fieldReset()
}
modalContainer.classList.add("active");
buttonModal.addEventListener("click", activeModal);

export const closeModal = () => {
  modalContainer.classList.remove("active");
  document.getElementById("name").dataset.index = "new";
  document.getElementById("name").classList.remove("erro");
  ClearInput();
  fieldReset()
};
document.querySelector(".close-modal").addEventListener("click", closeModal);

