import { responsePlay } from "./playerField.js";

const getPlayerApi = async (name) =>
  fetch(
    `http://api.squadmanagementtoll.kinghost.net/wp-json/api/jogadores?q=${name}`
  ).then((res) => res.json());

function debounceEvent() {
  let time = null;
  return function (value) {
    clearTimeout(time);
    time = setTimeout(() => {
      getPlayerApi(value).then((player) => responsePlay(player));
    }, 1000);
  };
}

const debounce = debounceEvent();
const handleKeyUp = ({ target }) => debounce(target.value);

document
  .getElementById("search-Players")
  .addEventListener("keyup", handleKeyUp);
