import "./fetchApi.js";
export const responsePlay = (player) => {
  const playerList = document.querySelector(".drag-players");
  const array = player.map(({ name, age, nationality, id }) => {
    return `
      <div class="drag-player" draggable="true" data-player="${id}">
        <li > Nome: <span >${name} </span> </li>
        <li> Nationality: <span>${nationality} </span></li>
        <li class="age"> Age: <span>${age} </span></li>
      </div>
      `;
  });
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

export const arrayPlayer = [];

function covertArray(player){
  const arrayprimary = player.target.innerText.split("\n");
  const teste = arrayprimary.map((r) => r.replace(" :", ",").split(":"));
  const arrayToObj = (arr) =>
    teste.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    arrayPlayer.push(arrayToObj());
}


export const resetArray =() => arrayPlayer.splice(0, arrayPlayer.length);

function dragStart(event) {
    covertArray(event)
  

  event.dataTransfer.setData("text/plain", event.target.innerText.split("")[6]);

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
