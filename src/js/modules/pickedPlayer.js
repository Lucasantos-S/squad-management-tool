import { getLocalStotage } from "../main.js";

export function migratoryPlayer() {
  const dbTeam = getLocalStotage();
  const arrayId = [];
  const array = dbTeam.map((item) => {
    return item.player;
  });
  array.map((r) => r.map((r) => arrayId.push(r.id)));
  let counts = {};
  arrayId.forEach((count) => {
    counts[count] = (counts[count] || 0) + 1;
  });

  const maxValue = Math.max(...Object.values(counts));
  const minValue = Math.min(...Object.values(counts));
  const maxNum = Object.keys(counts).find((key) => counts[key] === maxValue);
  const minNum = Object.keys(counts).find((key) => counts[key] === minValue);

  const percentageMax = maxValue * arrayId.length / 100
  const percentageMin = minValue * arrayId.length / 100
  
  
  let arrayMostPlayer = [];
  array.map((r) => r.map((r) => arrayMostPlayer.push(r)));
  const mosterPikedFilter = arrayMostPlayer.filter((r) => {
    return r.id === maxNum;
  });
  const namePlayerMostPicked = mosterPikedFilter.reduce((acc, r) => {
    acc = r.name;
    return `
        <p class="most-Name">${acc}</p>
        <span class="most-number" >${percentageMax}%</span>
        `;
  }, "");
  document.getElementById("most-contend").innerHTML = namePlayerMostPicked;

  let arrayLessPlayer = [];
  array.map((r) => r.map((r) => arrayLessPlayer.push(r)));
  const lessPikedFilter = arrayLessPlayer.filter((r) => {
    return r.id === minNum;
  });
  const namePlayerLessPicked = lessPikedFilter.reduce((acc, r) => {
    acc = r.name;
    return `
        <p class="most-Name">${acc}</p>
        <span class="most-number" >${percentageMin}%</span>
        `;
  }, "");
  return (document.getElementById("less-contend").innerHTML =
    namePlayerLessPicked);
}
