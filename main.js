let taskList = [];

function displayTaskList() {
  const tasks = document.querySelector(".main__tasks-list");
  for (let i = 0; i < taskList.length; i++) {
    tasks.appendChild(taskList[i]);
  }
  // clear things from display
}

function addToList() {
  const temp = document.querySelector("template");
  const clone = temp.content.cloneNode(true);
  const taskText = clone.querySelector("p");
  const input = document.querySelector(".header__input");

  taskText.textContent = input.value;
  taskList.push(clone);

  displayTaskList();
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addToList();
});
