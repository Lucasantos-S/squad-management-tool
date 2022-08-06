import { getLocalStotage } from "../main.js";

export const arrayPlayer = [];

export function covertArray(player) {
  const arrayprimary = player.target.innerText.split("\n");
  const arrayUpdat = arrayprimary.map((r) => r.replace(" :", ",").split(":"));
  const arrayToObj = () =>
    arrayUpdat.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  arrayPlayer.push(arrayToObj());
  averageAge();
}
export const resetArray = () => arrayPlayer.splice(0, arrayPlayer.length);

export const averageAge = () => {
  const teamAverageAge = arrayPlayer.reduce((acc, { Age }) => {
    acc += +Age / 11;
    return acc;
  }, 0);
  return teamAverageAge.toFixed(1);
};


const dbTema = getLocalStotage();

const teamAgeSorte = dbTema.map(({ teamAge }) => +teamAge).sort((a, b) =>  a - b).reverse()
const oldAgeFilter = dbTema.filter(({teamAge}) => teamAge > teamAgeSorte[5])
const LowestAvFilter = dbTema.filter(({teamAge}) => teamAge <= teamAgeSorte[5])


const listHighestAge = document.querySelector(".highest-age");
const listlowestAage = document.querySelector(".lowest-age");

export const includeList = () => {
  const dbTeam = getLocalStotage();
  if (dbTeam.length <= 5) {
    const creatListRank = dbTeam.reduce((acc, { name, teamAge }) => {
      return (acc += `<li>${name}<span>${teamAge}</span></li>`);
    }, "");

    listHighestAge.innerHTML = creatListRank;

  } else if(dbTeam.length > 5 || dbTeam.length <  10 ) {
    const HighestAvgAge = oldAgeFilter.reduce((acc, { name, teamAge }) => {
        return (acc += `<li>${name}<span>${teamAge}</span></li>`);
      }, "");
      listHighestAge.innerHTML = HighestAvgAge

      const LowestAvgAge = LowestAvFilter.reduce((acc, { name, teamAge }) => {
        return (acc += `<li>${name}<span>${teamAge}</span></li>`);
      }, "");

      listlowestAage.innerHTML = LowestAvgAge
  }
};

includeList();


