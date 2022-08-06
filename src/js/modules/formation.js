
const position = document.querySelector("[data-position]");
export let formationTeam = "3-4-3";
const handlePosition = ({ target }) => {
  position.dataset.position = target.value;
  formationTeam = target.value;
};

document.querySelector(".formation").addEventListener("change", handlePosition);



