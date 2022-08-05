const ul = document.getElementById("tag-ul");
const li = document.getElementById("input-tag");
export const tagList = [];

li.addEventListener("keydown", (event) => {
  if (event.code.includes("Enter") && event.target.value) {
    tagList.push(event.target.value);
    document.getElementById("input-tag").value = "";
    event.preventDefault();
    addTagName();
  }
});

export const addTagName = () => {
  ul.innerHTML = "";
  tagList.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div>
        <span>${item}</span>
        <button class="btn-remove-Tag" onclick="removeTag(${index})">x</button>
      </div>
    `;
    ul.appendChild(li);
  });
};

function removeTag(index) {
  tagList.splice(index, 1);
  addTagName();
}
removeTag()
