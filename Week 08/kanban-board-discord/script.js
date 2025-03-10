let draggedCard = null;
let rightClickedCard = null;

document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

function addTask(columnId) {
  const input = document.getElementById(`${columnId}-input`);
  const taskText = input.value;
  const taskDate = new Date().toLocaleString();
  const taskElement = createTaskElement(taskText, taskDate);
  document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
  saveTaskToLocalStorage(columnId, taskText, taskDate);
  input.value = "";
  updateTaskCount(columnId);
}

function createTaskElement(taskText, taskDate) {
  const taskElement = document.createElement("div");
  taskElement.innerHTML = `<span>${taskText}</span><br><small id="time">${taskDate}</small>`;
  taskElement.draggable = true;
  taskElement.classList.add("card");
  taskElement.addEventListener("dragstart", dragStart);
  taskElement.addEventListener("dragend", dragEnd);
  taskElement.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    rightClickedCard = this;
    showContextMenu(event.pageX, event.pageY);
  });
  return taskElement;
}

function dragStart() {
  setTimeout(() => {
    this.classList.add("dragging");
  }, 10);
  draggedCard = this;
}

function dragEnd() {
  this.classList.remove("dragging");
  draggedCard = null;
  ["todo", "doing", "done"].forEach((columnId) => {
    updateTaskCount(columnId);
    updateLocalStorage();
  });
}

const columns = document.querySelectorAll(".column .tasks");
columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
});

function dragOver(event) {
  event.preventDefault();
  // chipkane dega

  const afterElement = getDragAfterElement(this, event.pageY);
  //  = = =
  if (afterElement === null) {
    this.appendChild(draggedCard);
  } else {
    this.insertBefore(draggedCard, afterElement);
  }
}

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".card:not(.dragging)"),
  ]; // converting Nodelist to Array

  const result = draggableElements.reduce(
    (afterElement, currentElement) => {
      const box = currentElement.getBoundingClientRect();

      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > afterElement.offset) {
        return { offset: offset, element: currentElement };
      } else {
        return afterElement;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  );
  return result.element;
}

const contextmenu = document.getElementsByClassName("context-menu")[0];
function showContextMenu(x, y) {
  contextmenu.style.left = `${x}px`;
  contextmenu.style.top = `${y}px`;
  contextmenu.style.display = "block";
}

document.addEventListener("click", function () {
  contextmenu.style.display = "none";
});

function editTask() {
  const newTaskText = prompt("Edit task :- ", rightClickedCard.textContent);
  // !==
  if (newTaskText !== "") {
    rightClickedCard.textContent = newTaskText;
    updateLocalStorage();
  }
}

function deleteTask() {
  const columnId = rightClickedCard.parentElement.id.replace("-tasks", "");
  updateLocalStorage();

  rightClickedCard.remove();
  updateTaskCount(columnId);
}

function updateTaskCount(columnId) {
  const count = document.querySelectorAll(`#${columnId}-tasks .card`).length;
  console.log(count);

  document.getElementById(`${columnId}-count`).textContent = count;
}

function saveTaskToLocalStorage(columnId, taskText, taskDate) {
  const tasks = JSON.parse(localStorage.getItem(columnId)) || [];
  tasks.push({ text: taskText, date: taskDate });
  localStorage.setItem(columnId, JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  ["todo", "doing", "done"].forEach((columnId) => {
    const tasks = JSON.parse(localStorage.getItem(columnId)) || [];
    tasks.forEach(({ text, date }) => {
      const taskElement = createTaskElement(text, date);
      document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
      updateTaskCount(columnId);
    });
  });
}

function updateLocalStorage() {
  ["todo", "doing", "done"].forEach((columnId) => {
    const tasks = [];
    document.querySelectorAll(`#${columnId}-tasks .card`).forEach((card) => {
      const taskText = card.querySelector("span").textContent;
      const taskDate = card.querySelector("small").textContent;
      tasks.push({ text: taskText, date: taskDate });
    });
    localStorage.setItem(columnId, JSON.stringify(tasks));
  });
}
