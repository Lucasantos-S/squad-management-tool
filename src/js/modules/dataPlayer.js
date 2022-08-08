
export const arrayPlayer = [];

export function covertArray(player) {

  const playerContend = `${player.target.innerText} \nid:${player.target.dataset.player}`
 
  const arrayprimary = playerContend.toLowerCase().split("\n") 
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
  const teamAverageAge = arrayPlayer.reduce((acc, { age }) => {
    acc += +age / 11;
    return acc;
  }, 0);
  return teamAverageAge.toFixed(1);
};
