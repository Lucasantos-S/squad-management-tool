/* ativando o modal apos o click no botão*/
const buttonModal = document.querySelector(".btn-modal");
const modalContainer = document.querySelector(".modal-container");

/* apos clicar e adicionado a class active no modal-container*/
const activeModal = () => modalContainer.classList.add("active");

/* um if verificando se o clique esta sendo no modal container*/
const removeActive = (event) => {
  if (modalContainer === event.target) {
    modalContainer.classList.remove("active");
    document.getElementById("name").dataset.index = "new";
  }
  modalContainer === event.target ? ClearInput() : null;
};

const closeModal = () => modalContainer.classList.remove("active");

/************************************************************************************************************** */
/*SALVANDO OS INPUT NO LOCAL STOTAGE*/
/**botao pra salvar o time */
const btnSave = document.querySelector(".btn-save");

const getLocalStotage = () => JSON.parse(localStorage.getItem("teams")) ?? [];
const setLocalStogae = (dbTeam) =>
  localStorage.setItem("teams", JSON.stringify(dbTeam));

/*pega o index e novo time, depois puxar o localStorage, altera o time de acordo com o index passado
(database[numero do index] = ao novo time)
*/
const updateTeam = (index, team) => {
  const dbTeam = getLocalStotage();
  dbTeam[index] = team;
  setLocalStogae(dbTeam);
};

/* da mesma forma que e feito com o update, aqui foi utiizado o metedo splice que excluir o item/index do array*/
const deletDbTeam = (index) => {
  const dbteam = getLocalStotage();
  dbteam.splice(index, 1);
  setLocalStogae(dbteam);
};

/* cria o time, pega o objeto verificado no getLocalStotage, manda com o push para o array que vai estar vazio, depois envia no setLocalStogae que da um set no localStorage, passando o teams, e o objeto dentro de um array*/

const creatTeam = (team) => {
  const dbTeam = getLocalStotage();
  dbTeam.push(team);
  setLocalStogae(dbTeam);
};

/* validar os inputs */
const validateInput = () => {
  return document.getElementById("form").reportValidity();
};

/* limpar os campos */
const ClearInput = () => {
  const inputs = document.querySelectorAll("#form input");
  const textarea = document.querySelector("#description");
  inputs.forEach((input) => {
    input.value = "";
  });
  textarea.value = "";
};

/* acrescentar os valores em um objeto */
const saveTheTeam = () => {
  if (validateInput()) {
    const team = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      website: document.getElementById("website").value,
      player: array,
    };
    const index = document.getElementById("name").dataset.index;
    if (index == "new") {
      creatTeam(team);
      includeTeamTable();
      ClearInput();
      closeModal();
    } else {
      updateTeam(index, team);
      includeTeamTable();
      closeModal();
      ClearInput();
      document.getElementById("name").dataset.index = "new";
    }
  }
};

/* incluindo a tabela no tbody */

const includeTeamTable = () => {
  const dbTeam = getLocalStotage();
  const creatTeam = dbTeam.reduce(
    (accumulator, { name, description }, index) => {
      return (accumulator += `
        <tr>
          <td>${name}</td>
          <td>${description}</td>
          <td class="btn-crud">
            <button id="delete-${index}">
                  <img type="button" src="public/image/delete_icon.svg" alt="button delete" id="delet-${index}" />
            </button>
            <button id="share-${index}">
                  <img  type="button" src="public/image/share_icon.svg" alt="button shere" id="share-${index}" />
            </button>
            <button id="edit-${index}">
                  <img type="button" src="public/image/edit_icon.svg" alt="button edit" id="edit-${index}" />
            </button>
          </td>
        </tr>`);
    },
    ""
  );
  document.querySelector("tbody").innerHTML = creatTeam;
};

includeTeamTable();

/* apagando as linhas antes de incluir a proxima*/
const clearTable = () => {
  const rows = document.querySelectorAll(".records table tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

const fillFilds = (team) => {
  document.getElementById("name").value = team.name;
  document.getElementById("description").value = team.description;
  document.getElementById("website").value = team.website;
  document.getElementById("name").dataset.index = team.index;
  document.querySelector("[data-position]").dataset.position = "3-4-3";
};

///editar e deletar um time da tabela

const editTeam = (index) => {
  const team = getLocalStotage()[index];
  team.index = index;
  fillFilds(team);
  activeModal();
};

///deletar ou editar o array do db, passando o index

const editDelete = ({ target }) => {
  const [action, index] = target.id.split("-");
  if (action == "delet") {
    //const team = getLocalStotage()
    deletDbTeam(index);
    updateTeam();
    includeTeamTable();
  } else if (action == "share") {
    console.log("compartilhar");
  } else if (action == "edit") {
    editTeam(index);
  } else {
  }
};

/*events */

["touchstart", "click"].forEach((event) => {
  buttonModal.addEventListener(event, activeModal);
});
modalContainer.addEventListener("click", removeActive);
btnSave.addEventListener("click", saveTheTeam);
document.querySelector(".records>tbody").addEventListener("click", editDelete);

/*----------------- tag ---------------- */

const ul = document.getElementById("tag-ul");
const li = document.getElementById("input-tag");
const tagList = [];

li.addEventListener("keydown", (event) => {
  if (event.code.includes("Enter") && event.target.value) {
    tagList.push(event.target.value);
    document.getElementById("input-tag").value = "";
    event.preventDefault();
    addTagName();
  }
});

const addTagName = (event) => {
  
  ul.innerHTML = "";
  tagList.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div>
        <span>${item}</span>
        <button class="btn-remove-Tag" onClick="removeTag(${index})">x</button>
      </div>
    `;
    ul.appendChild(li);
  });
};

function removeTag(index) {
  tagList.splice(index, 1);
  addTagName();
}

/* ----------- fectch api player ----------- */



  const responsPlay = (player) => {
  const playerList = document.querySelector(".drag-players");
  const array = player.map(({ name, age , nationality, id}) => {
    return `
    <div class="drag-player" draggable="true" data-player="${name}-${nationality}-${age}-${id}">
      <li id="${name}" > Nome: <span >${name } </span> </li>
      <li> Nationality: <span>${ nationality } </span></li>
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

const getPlayerApi = async (event) => {
  const response = await fetch(
    `http://api.squadmanagementtoll.kinghost.net/wp-json/api/jogadores?q=${event}`
  );
  const json = await response.json();
  responsPlay(json);
};

document
  .getElementById("search-Players")
  .addEventListener("keyup", ({ target }) => {
    target.value.length > 1 ? getPlayerApi(target.value) : null;
  });

/*  atualiza o campo do jogador de acordo com a formação */

const position = document.querySelector("[data-position]");

const handlePosition = ({ target }) =>
  (position.dataset.position = target.value);

document.querySelector(".formation").addEventListener("change", handlePosition);

/*------------------Drag and drop --------------------*/

const dropItems = document.querySelectorAll(".drop_position");

//drop evenets

dropItems.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dropEvent);
  box.addEventListener("dragleave", dragLeave);
});

function playerArray (value =[]){
    console.log(value)
}

playerArray()
function dragStart(event) {
  const arrayPlayer=  event.target.dataset.player.split('-')
  playerArray(arrayPlayer)
  event.dataTransfer.setData("text/plain", event.target.innerText.split("")[6]);


  const nomePlay = arrayPlayer[0].replace(/[ ]+/g , ',').split(',')
  const novo = nomePlay.forEach(r => {
    return r.slice(0,1)
  })

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

/*--------------------------------- */

// const includeList = () => {
//   const dbTeam = getLocalStotage();
//   let array = []
//   const creatListRank = dbTeam.reduce((accumulator, { name, player }) => {
//     const age = player.reduce((accumulator, { age }) => {
//       return accumulator + age / 11;
//     }, 0);
//     const ageFormate = age.toFixed(1);
//     array.push(ageFormate)

//     accumulator += `
//         <li>
//           ${name}
//           <span>
//           ${ageFormate}
//           </span>
//         </li>`.replace(/,/g, "");
//     return accumulator;
//   }, "");
//   const listContend = document.querySelector(".highest-age")
//     listContend.innerHTML = creatListRank
//   console.log(array)
//   const sorted = array.sort((a,b) => {
//     return a - b;
//     }).reverse()
//     console.log(sorted);

//     const top5 = sorted.filter((highest, index) => {
//         if(index < 4) {
//           return highest
//         }
//     })

// };

// includeList();
