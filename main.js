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
