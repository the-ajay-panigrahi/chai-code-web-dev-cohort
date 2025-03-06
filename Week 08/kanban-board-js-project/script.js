const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close");
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
// const todoList = document.querySelectorAll(".task-list")[0];
const todoList = document.querySelector(".task-list");

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

  const task = document.createElement("div");
  task.classList.add("task");
  task.textContent = taskText;
  todoList.appendChild(task);
  taskInput.value = "";
  modal.style.display = "none";
});
