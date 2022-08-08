import { activeModal, closeModal } from "./modules/modal.js";
import { tagList } from "./modules/tag.js";
import "./modules/playerField.js";
import { formationTeam, fieldReset} from "./modules/formation.js";
import { validateInput } from "./modules/Validation.js";
import { arrayPlayer, resetArray, averageAge } from "./modules/dataPlayer.js";
import { includeList } from "./modules/topFiveAge.js";
import {migratoryPlayer} from "./modules/pickedPlayer.js";
migratoryPlayer()
includeList()

const btnSave = document.querySelector(".btn-save");

export function getLocalStotage() {
  return JSON.parse(localStorage.getItem("teams")) ?? [];
}

const setLocalStogae = (dbTeam) =>
  localStorage.setItem("teams", JSON.stringify(dbTeam));



const updateTeam = (index, team) => {
  const dbTeam = getLocalStotage();
  dbTeam[index] = team;
  setLocalStogae(dbTeam);
};


const deletDbTeam = (index) => {
  const dbteam = getLocalStotage();
  dbteam.splice(index, 1);
  setLocalStogae(dbteam);
};



const creatTeam = (team) => {
  const dbTeam = getLocalStotage();
  dbTeam.push(team);
  setLocalStogae(dbTeam);
};


export const ClearInput = () => {
  const inputs = document.querySelectorAll("#form input");
  const textarea = document.querySelector("#description");
  inputs.forEach((input) => {
    input.value = "";
  });
  textarea.value = "";
};


const saveTheTeam = () => {
     
  if (validateInput()) {
    const team = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      website: document.getElementById("website").value,
      player: arrayPlayer,
      tagList: tagList,
      formation: formationTeam,
      teamAge: averageAge(),
    };
    const index = document.getElementById("name").dataset.index;
    if (index == "new") {
      creatTeam(team);
      includeTeamTable();
      ClearInput();
      closeModal();
      resetArray();
      includeList()
      migratoryPlayer()
      fieldReset()
  
    } else {
      updateTeam(index, team);
      includeTeamTable();
      closeModal();
      ClearInput();
      includeList();
      migratoryPlayer()
      fieldReset()
      document.getElementById("name").dataset.index = "new";
    }
  }
 
};



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



const editTeam = (index) => {
  const team = getLocalStotage()[index];
  team.index = index;
  fillFilds(team);
  activeModal();
};



const editDelete = ({ target }) => {
  const [action, index] = target.id.split("-");
  if (action == "delet") {
    deletDbTeam(index);
    updateTeam();
    includeTeamTable();
    includeList();
    migratoryPlayer()
  } else if (action == "share") {
    null;
  } else if (action == "edit") {
    editTeam(index);
  } else {
  }
};

/*events */
btnSave.addEventListener("click", saveTheTeam);
document.querySelector(".records>tbody").addEventListener("click", editDelete);





