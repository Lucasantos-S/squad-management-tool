import { getLocalStotage } from "../main.js";

const listHighestAge = document.querySelector(".highest-age");
const listlowestAage = document.querySelector(".lowest-age");

export const includeList = () => {
  listHighestAge.innerHTML = "";
  listlowestAage.innerHTML = "";
  const dbTeam = getLocalStotage();
  const teamAgeSorte = dbTeam
    .map(({ teamAge }) => +teamAge)
    .sort((a, b) => a - b)
    .reverse();

  const oldAgeFilter = dbTeam.filter(
    ({ teamAge }) => teamAge > teamAgeSorte[5]
  );
  const LowestAvFilter = dbTeam.filter(
    ({ teamAge }) => teamAge <= teamAgeSorte[5]
  );

  if (dbTeam.length <= 5) {
    const creatListRank = dbTeam.reduce((acc, { name, teamAge }) => {
      return (acc += `<li>${name}<span>${teamAge}</span></li>`);
    }, "");

    listHighestAge.innerHTML = creatListRank;
  } else if (dbTeam.length > 5 || dbTeam.length < 10) {
    const HighestAvgAge = oldAgeFilter.reduce((acc, { name, teamAge }) => {
      return (acc += `<li>${name}<span>${teamAge}</span></li>`);
    }, "");
    listHighestAge.innerHTML = HighestAvgAge;

    const LowestAvgAge = LowestAvFilter.reduce((acc, { name, teamAge }) => {
      return (acc += `<li>${name}<span>${teamAge}</span></li>`);
    }, "");

    listlowestAage.innerHTML = LowestAvgAge;
  }
};

const dbTeam = getLocalStotage();


const arrayId = [];
const array = dbTeam.map((item) => {
    return item.player
});
array.map(r => r.map(r => arrayId.push(r.id)))

function migratoryPlayer(arr) {
  let counts = {};
  arr.forEach((count) => {
    counts[count] = (counts[count] || 0) + 1;
  });

  const maxValue = Math.max(...Object.values(counts));
  const minValue = Math.min(...Object.values(counts));
  const maxNum = Object.keys(counts).find((key)=> counts[key] === maxValue)
  const minNum = Object.keys(counts).find((key)=> counts[key] === minValue)
  mostPickedPlayer(maxNum, maxValue)
  lessPickedPlayer(minNum, minValue)
}

migratoryPlayer(arrayId);

function mostPickedPlayer(id, value){
  console.log(id , value)
}

function lessPickedPlayer(id, value){
  console.log(id , value)
}

lessPickedPlayer()
mostPickedPlayer()
