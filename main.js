document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});

// Move tasks to Done section in footer when ticked
// tasks = [task1, task2, ...]
let taskList = [];
let completedList = [];

const task = document.querySelector(".task");

function displayCompleted() {
  const main = document.querySelector("main");
  const footerCompletedList = document.querySelector("footer__list-completed");
  // remove all items from compleated page section
  footerCompletedList.innerHTML = "";
  //
  for (let i = 0; i < completedList.length; i++) {
    footerCompletedList.appendChild(completedList[i]);
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
