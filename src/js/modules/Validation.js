const nameTeam = document.getElementById("name");
export const validateInput = () => {
  if (!document.getElementById("form").name.value) {
    nameTeam.classList.add("erro");
    return false;
  } else {
    {
      nameTeam.classList.remove("erro");
      return true;
    }
  }
};
nameTeam.addEventListener("change", validateInput);
