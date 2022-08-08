import "./fetchApi.js";
import { covertArray } from "./dataPlayer.js";
export const responsePlay = (player) => {
  const playerList = document.querySelector(".drag-players");
  const array = player.reduce((acc, { name, age, nationality, id }) => {
    acc += `
    <div class="drag-player" draggable="true" data-player="${id}">
      <li> Name: <span >${name} </span> </li>
      <li> Nationality: <span>${nationality} </span></li>
      <li class="age"> Age: <span>${age} </span></li>
    </div>
    `;
    return acc;
  }, "");
  playerList.innerHTML = array;
  const dragItems = document.querySelectorAll(".drag-player");
  dragItems.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
  });
};

/*------------------Drag and drop --------------------*/
const dropItems = document.querySelectorAll(".drop_position");
dropItems.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dropEvent);
  box.addEventListener("dragleave", dragLeave);
});

function dragStart(event) {
  covertArray(event);
  const name = event.target.innerText.split(" ")[1].charAt(0);
  const lastName = event.target.innerText.split(" ")[2].charAt(0);
  event.dataTransfer.setData("text/plain", name + lastName);

  setTimeout(() => {
    this.className = "invisibol";
  }, 0);
}

function dragOver(event) {
  event.preventDefault();
  this.classList.add("enter");
}

function dropEvent(event) {
  event.preventDefault();
  const namePlayer = document.createElement("p");
  namePlayer.className = "drop";
  namePlayer.innerHTML = event.dataTransfer.getData("text");
  this.append(namePlayer);
  this.classList.remove("enter");
}

function dragLeave(event) {
  event.preventDefault();
  this.classList.remove("enter");
}
