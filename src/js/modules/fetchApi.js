import { responsePlay } from "./playerField.js";

const urlApiPlayers = `http://api.squadmanagementtoll.kinghost.net/wp-json/api/jogadores?q=`;

/* fectch da api  */
const getPlayerApi = async (name) =>
  fetch(urlApiPlayers + name).then((res) => res.json());

/* chamando a function do handleKeyUp apos 500ms*/
function debounceEvent(func, wait = 1000, time) {
  return function () {
    clearTimeout(time);
    time = setTimeout(() => {
      func(...arguments);
    }, wait);
  };
}

/* function que e chamada no debounce apos 500ms */
const handleKeyUp = ({ target }) =>
  getPlayerApi(target.value).then((player) => responsePlay(player));

document
  .getElementById("search-Players")
  .addEventListener("keyup", debounceEvent(handleKeyUp, 500));
