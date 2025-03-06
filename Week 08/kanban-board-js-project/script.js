const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close");
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
// const todoList = document.querySelectorAll(".task-list")[0];
const todoList = document.querySelector(".task-list");

document.addEventListener("DOMContentLoaded", function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTaskToDOM(task.text, task.boardId);
  });
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll(".task").forEach((task) => {
    tasks.push({
      text: task.querySelector(".task-text").textContent,
      boardId: task.parentElement.id,
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToDOM(taskText, boardId = "todo") {
  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div id="btn-container">
    <button class="edit-btn">
      <img src="./assets/pencil.png" alt="Edit" width="20">
    </button>
    <button class="delete-btn">
      <img src="./assets/delete.png" alt="Delete" width="20">
    </button>
    </div>
  `;

  task.setAttribute("draggable", "true");
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });

  task.querySelector(".edit-btn").addEventListener("click", () => {
    const newText = prompt(
      "Edit your task:",
      task.querySelector(".task-text").textContent
    );
    if (newText) {
      task.querySelector(".task-text").textContent = newText;
      saveTasks();
    }
  });

  task.querySelector(".delete-btn").addEventListener("click", () => {
    task.remove();
    saveTasks();
  });

  //   todoList.appendChild(task);
  document.getElementById(boardId).appendChild(task);
}

openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  addTaskToDOM(taskText);
  saveTasks();

  taskInput.value = "";
  modal.style.display = "none";
});

document.querySelectorAll(".task-list").forEach((board) => {
  board.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  board.addEventListener("drop", (e) => {
    const draggedTask = document.querySelector(".dragging");
    if (draggedTask) {
      board.appendChild(draggedTask);
      saveTasks();
    }
  });
});
