/* ativando o modal apos o click no botão*/
const buttonModal = document.querySelector(".btn-modal");
const modalContainer = document.querySelector(".modal-container");
const btnCrud = document.querySelectorAll(".btn-crud");

/* apos clicar e adicionado a class active no modal-container*/
const activeModal = () => modalContainer.classList.add("active");

/* um if verificando se o clique esta sendo no modal container*/
const removeActive = (event) =>
  modalContainer === event.target
    ? modalContainer.classList.remove("active")
    : null;

buttonModal.addEventListener("click", activeModal);

modalContainer.addEventListener("click", removeActive);
