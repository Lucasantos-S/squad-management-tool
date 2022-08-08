import {resetArray} from './dataPlayer'
const position = document.querySelector("[data-position]");
export let formationTeam = "3-4-3";
const handlePosition = ({ target }) => {
  position.dataset.position = target.value;
  formationTeam = target.value;
  fieldReset()
  resetArray()
};

document.querySelector(".formation").addEventListener("change", handlePosition);


export function fieldReset() {
  const dro = document.querySelectorAll(".drop_position");
  dro.forEach(r => {
    r.innerHTML = ''
  })
}