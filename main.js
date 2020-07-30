let taskList = [];
const input = document.querySelector(".header__input");

function displayTaskList() {
  const tasks = document.querySelector(".main__tasks-list");
  tasks.innerHTML = "";
  for (let i = taskList.length - 1; i > 0; i--) {
    const clone = taskList[i].cloneNode(true);
    tasks.appendChild(clone);
  }
  input.value = "";
}

function addToList() {
  const temp = document.querySelector("template");
  const clone = temp.content.cloneNode(true);
  const taskText = clone.querySelector("p");

  taskText.textContent = input.value;
  taskList.push(clone);

  displayTaskList();
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addToList();
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});

// Move tasks to Done section in footer when ticked
// tasks = [task1, task2, ...]
let taskList = [];
let completedList = [];
const clone = task.cloneNode(true);

const task = document.querySelector(".task");

function displayCompleted() {
  const mainToDolist = document.querySelector("#toDoList");
  const footerCompletedList = document.querySelector("footer__list-completed");
  // remove all items from compleated page section
  footerCompletedList.innerHTML = "";
  mainToDolist.innerHTML = "";
  //
  for (let i = 0; i < completedList.length; i++) {
    clone.textContent = completedList[i];
    footerCompletedList.appendChild(clone);
  }

  for (let y = 0; y < taskList.length; y++) {
    clone.textContent = taskList[y];
    mainToDolist.appendChild(clone);
  }
}

function addListItem(item, list) {
  list.push(item);
}

function removeListItem(item, list) {
  let i = list.indexOf(item);
  list.splice(i, 1);
}

function moveToCompleted(item) {
  addListItem(item, completedList);
  removeListItem(item, taskList);
  displayLists();
}

task.children[0].addEventListener("checked", moveToCompleted(task));
