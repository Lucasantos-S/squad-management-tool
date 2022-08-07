import { getLocalStotage } from "../main.js";


const listHighestAge = document.querySelector(".highest-age");
const listlowestAage = document.querySelector(".lowest-age");

export const includeList = () => {
  listHighestAge.innerHTML= ''
  listlowestAage.innerHTML = ''
  const dbTeam = getLocalStotage();
  const teamAgeSorte = dbTeam
    .map(({ teamAge }) => +teamAge)
    .sort((a, b) => a - b)
    .reverse();
  
  const oldAgeFilter = dbTeam.filter(({ teamAge }) => teamAge > teamAgeSorte[5]);
  const LowestAvFilter = dbTeam.filter(
    ({ teamAge }) => teamAge <= teamAgeSorte[5]
  )
  
  if (dbTeam.length <= 5) {
    const creatListRank = dbTeam.reduce((acc, { name, teamAge }) => {
      return (acc += `<li>${name}<span>${teamAge}</span></li>`);
    }, "");

    listHighestAge.innerHTML = creatListRank;
  }  else if  (dbTeam.length > 5 || dbTeam.length < 10) {
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


