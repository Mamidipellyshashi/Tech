document.addEventListener("DOMContentLoaded", () => {
  const todoColumn = document.getElementById("todo");
  const doingColumn = document.getElementById("doing");
  const doneColumn = document.getElementById("done");

  todoColumn.addEventListener("dragover", allowDrop);
  doingColumn.addEventListener("dragover", allowDrop);
  doneColumn.addEventListener("dragover", allowDrop);

  todoColumn.addEventListener("drop", drop);
  doingColumn.addEventListener("drop", drop);
  doneColumn.addEventListener("drop", drop);
});

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function createTaskCard(taskTitle, taskDescription) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.draggable = true;
  taskCard.id = "task-" + Math.random();

  taskCard.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
  });

  const titleElement = document.createElement("h3");
  titleElement.textContent = taskTitle;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = taskDescription;

  taskCard.appendChild(titleElement);
  taskCard.appendChild(descriptionElement);

  return taskCard;
}

const todoColumn = document.getElementById("todo");
const doingColumn = document.getElementById("doing");
const doneColumn = document.getElementById("done");

const task1 = createTaskCard("Task 1", "Description for Task 1");
const task2 = createTaskCard("Task 2", "Description for Task 2");
const task3 = createTaskCard("Task 3", "Description for Task 3");

todoColumn.appendChild(task1);
doingColumn.appendChild(task2);
doneColumn.appendChild(task3);