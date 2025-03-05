const addNewTaskBtn = document.getElementById("add-new-task-btn");
const todoBoard = document.getElementById("todo-board");
const allTasks = document.querySelectorAll(".task");
const allBoards = document.querySelectorAll(".board");
const modal = document.getElementById("modal");
const modalInput = document.querySelector("#modal input");
const modalDoneBtn = document.querySelector("#modal button");

function attachDragEvent(targetElement) {
  targetElement.addEventListener("dragstart", (event) => {
    event.target.classList.add("flying");
    setTimeout(() => {
      event.target.classList.add("hidden");
    }, 10);
  });

  targetElement.addEventListener("dragend", (event) => {
    event.target.classList.remove("flying");
    event.target.classList.remove("hidden");
  });
}

allTasks.forEach((tasks) => {
  attachDragEvent(tasks);
});

addNewTaskBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalDoneBtn.addEventListener("click", () => {
    const taskString = modalInput.value;
    modalInput.value = "";
    modal.classList.add("hidden");
    if (!taskString) return;
    const task = document.createElement("p");
    task.classList.add("task");
    task.innerText = taskString;
    task.setAttribute("draggable", true);
    attachDragEvent(task);
    todoBoard.appendChild(task);
  });
});

allBoards.forEach((board) => {
  board.addEventListener("dragover", (event) => {
    event.preventDefault();
    const flyingElement = document.querySelector(".flying");
    board.appendChild(flyingElement);
  });
});
