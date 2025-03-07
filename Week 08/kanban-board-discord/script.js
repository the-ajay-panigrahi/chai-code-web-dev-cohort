let draggedCard = null;
let rightClickedCard = null;

// Task add karne ka function
function addTask(columnId) {
  const input = document.getElementById(`${columnId}-input`);
  const taskText = input.value.trim();
  if (taskText === "") {
    return;
  }
  const taskElement = createTaskElement(taskText);
  document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
  input.value = "";
}

function createTaskElement(taskText) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("card"); // baad meinaate hai styling
  taskElement.textContent = taskText;
  taskElement.draggable = true;
  //   taskElement.setAttribute("draggable", true)
  taskElement.addEventListener("dragstart", dragStart);
  taskElement.addEventListener("dragend", dragEnd);
  taskElement.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    rightClickedCard = this;
    console.log(event.pageX, event.pageY);

    showContextMenu(event.pageX, event.pageY);
  });
  return taskElement;
}

function dragStart() {
  this.classList.add("dragging");
  draggedCard = this;
}
function dragEnd() {
  this.classList.remove("dragging");
  draggedCard = null;
}

const columns = document.querySelectorAll(".column .tasks");
columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
});

function dragOver(event) {
  event.preventDefault(); // drop
  this.appendChild(draggedCard);
}

const contextMenu = document.getElementsByClassName("context-menu")[0];

function showContextMenu(x, y) {
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.display = "block";
}

document.addEventListener("click", function () {
  contextMenu.style.display = "none";
});

function editTask() {
  if (rightClickedCard !== null) {
    const newTaskText = prompt("Edit task:-", rightClickedCard.textContent);
    if (newTaskText !== "") {
      rightClickedCard.textContent = newTaskText;
    }
  }
}

function deleteTask() {
  rightClickedCard.remove();
}
