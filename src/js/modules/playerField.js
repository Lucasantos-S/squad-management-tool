import "./fetchApi.js";
export const responsPlay = (player) => {
  const playerList = document.querySelector(".drag-players");
  const array = player.map(({ name, age, nationality, id }) => {
    return `
      <div class="drag-player" draggable="true" data-player="${name}-${nationality}-${age}-${id}">
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

//drop evenets

dropItems.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dropEvent);
  box.addEventListener("dragleave", dragLeave);
});

const arrayPlayer = [];

function dragStart(event) {
  arrayPlayer.push(event.target.innerText.split("\n"));
  event.dataTransfer.setData("text/plain", event.target.innerText.split("")[6]);

  console.log(arrayPlayer);
  // const nomePlay = arrayPlayer[0].replace(/[ ]+/g , ',').split(',')
  // const novo = nomePlay.forEach(r => {
  //   return r.slice(0,1)
  // })

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
