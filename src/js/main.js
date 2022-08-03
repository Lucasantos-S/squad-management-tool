/* ativando o modal apos o click no botão*/
const buttonModal = document.querySelector(".btn-modal");
const modalContainer = document.querySelector(".modal-container");


/* apos clicar e adicionado a class active no modal-container*/
const activeModal = () => modalContainer.classList.add("active");

/* um if verificando se o clique esta sendo no modal container*/
const removeActive = (event) => {
  if(modalContainer === event.target){
    modalContainer.classList.remove("active")
    document.getElementById("name").dataset.index = 'new'
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
      name:document.getElementById('name').value,
      description: document.getElementById("description").value,
      website: document.getElementById("website").value,
      player: jogadores(),
    }
    const index = document.getElementById("name").dataset.index;
    if(index == "new") {
      creatTeam(team);
      includeTeamTable();
      includeList();
      ClearInput();
      closeModal();
    } else {
      updateTeam(index, team);
      includeTeamTable();
      closeModal();
      ClearInput();
      document.getElementById("name").dataset.index = 'new'
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
  document.querySelector('[data-position]').dataset.position = '3-4-3'
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
    deletDbTeam(index)
    updateTeam()
    includeTeamTable()
    includeList()
  } else if (action == "share") {
    console.log("compartilhar");
  } else if (action == "edit"){
    editTeam(index)
  } else{
  }
};

/*events */
buttonModal.addEventListener("click", activeModal);
modalContainer.addEventListener("click", removeActive);
btnSave.addEventListener("click", saveTheTeam);
document.querySelector(".records>tbody").addEventListener("click", editDelete);

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

const jogadores = () => {
  const jogadores = [
    {
      nome: "ronal",
      age: 35,
      pais: "brasil",
    },
    {
      nome: "neymar",
      age: 25,
      pais: "brasil",
    },
    {
      nome: "zidane",
      age: 50,
      pais: "brasil",
    },
    {
      nome: "cafu",
      age: 20,
      pais: "brasil",
    },
    {
      nome: "zagalo",
      age: 19,
      pais: "brasil",
    },
    {
      nome: "zagalo",
      age: 32,
      pais: "brasil",
    },
    {
      nome: "zagalo",
      age: 20,
      pais: "brasil",
    },
    {
      nome: "zagalo",
      age: 47,
      pais: "brasil",
    },
    {
      nome: "zagalo",
      age: 32,
      pais: "brasil",
    },
    {
      nome: "zagalo",
      age: 40,
      pais: "brasil",
    },
  ];
  return jogadores;
};






/*  atualiza o campo do jogador de acordo com a formação */

const position = document.querySelector('[data-position]')

const handlePosition = ({target}) => position.dataset.position = target.value


document.querySelector('.formation').addEventListener('change', handlePosition)