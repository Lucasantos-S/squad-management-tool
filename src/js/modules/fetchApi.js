import {responsPlay} from"./playerField.js"

export const getPlayerApi = async (event) => {
    const response = await fetch(
      `http://api.squadmanagementtoll.kinghost.net/wp-json/api/jogadores?q=${event}`
    );
    const json = await response.json();
    responsPlay(json);
  };
  
  document
    .getElementById("search-Players")
    .addEventListener("keyup", ({ target }) => {
      target.value.length > 3 ? getPlayerApi(target.value) : null;
    });