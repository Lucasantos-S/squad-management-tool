const nameTeam = document.getElementById("name");
export const validateInput = (event) => {
  if (!document.getElementById("form").name.value) {
    document.getElementById("form").name.style.border = "1px solid red";
    return false;
  }
  {
    document.getElementById("form").name.style.border = "3px solid #eee7ee";
    return true;
  }
};

nameTeam.addEventListener("change", validateInput);


function backToTop(){
    window.scrollTo(0,0)
}
