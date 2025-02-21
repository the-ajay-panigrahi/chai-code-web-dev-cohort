const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const ulContainer = document.getElementById("ul-container");

function addTodo() {
  if (input.value !== "") {
    const value = input.value;
    const li = document.createElement("li");
    li.innerText = value;
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = `<img src="./assets/delete.png" alt="delete" >`;
    const editBtn = document.createElement("span");
    editBtn.innerHTML = ` <img src="./assets/pencil.png" alt="pencil-icon" />`;
    const additionalContainer = document.createElement("div");
    additionalContainer.appendChild(editBtn);
    additionalContainer.appendChild(deleteBtn);
    li.appendChild(additionalContainer);
    ulContainer.appendChild(li);
    input.value = "";
    editBtn.addEventListener("click", () => {
      const newInput = document.createElement("input");
      const saveBtn = document.createElement("button");
      const text = li.innerText;
      li.innerHTML = "";
      li.appendChild(newInput);
      newInput.value=text
      saveBtn.innerText = "save";
      li.appendChild(saveBtn);

      saveBtn.addEventListener("click", () => {
        if (newInput.value !== "") {
          li.innerText = newInput.value;
          additionalContainer.appendChild(editBtn);
          additionalContainer.appendChild(deleteBtn);
          li.appendChild(additionalContainer);
        }
      });
    });
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  }
}

addBtn.addEventListener("click", addTodo);
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
