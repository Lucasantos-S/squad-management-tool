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
