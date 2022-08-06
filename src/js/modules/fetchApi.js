import { responsePlay } from "./playerField.js";
let time = null;

const getPlayerApi = async (name) =>
  fetch(
    `http://api.squadmanagementtoll.kinghost.net/wp-json/api/jogadores?q=${name}`
  ).then((res) => res.json());

function debounceEvent(value) {
  clearTimeout(time);
  time = setTimeout(() => {
    getPlayerApi(value).then((player) => responsePlay(player))
  }, 1000);
}
const handleKeyUp = ({ target }) => {
  debounceEvent(target.value);
};

document
  .getElementById("search-Players")
  .addEventListener("keyup", handleKeyUp);
