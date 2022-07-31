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



const dataTeam = {
  name: "cruzeiro",
  descrtiption: "esse e o meu time",
  website: "https://cruzeiro.com",
  player: []
};

// /*entendendo como vou fazer para incluir o jogador que vai vir de uma api externa*/
// const setPlayer =(nome, age, nationality)=> {
//   dataTeam.player.push({nome, age, nationality})
  
//   console.log( dataTeam);
// }

// setPlayer('ronaldo', 25, 'portugal')


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
const deleteTeam = (index) => {
  const dbteam = getLocalStotage ()
  dbteam[index].splice(index, 1)
  setLocalStogae(dbteam)
}

/* cria o time, pega o objeto verificado no getLocalStotage, manda com o push para o array que vai estar vazio, depois envia no setLocalStogae que da um set no localStorage, passando o teams, e o objeto dentro de um array*/

const creatTeam = (team) => {
  const dbTeam = getLocalStotage();
  dbTeam.push(team);
  setLocalStogae(dbTeam);
};

creatTeam(dataTeam);

updateTeam(1,  dataTeam)






