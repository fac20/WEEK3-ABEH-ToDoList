// Test 1. Add tasks to a list so that I can keep track of them.
test("Submitting a new task adds it to the list", (t) => {
  const input = document.querySelector(".header__input");
  input.value = "change underpants";
  const submit = document.querySelector(".header__button-add");
  submit.click();
  const result = document.querySelector(".taskText");
  const expected = "change underpants";
  t.equal(result.textContent, expected);
  // result.textContent = "";
  // t.end();
  // test goes here
});

// test("Adds item to list", (t) => {
//   const actual;
//   const expected;
//     t.equal(actual, expected, "new task should add to list")
// })

test("Creates an unordered list", (t) => {
  const main = document.querySelector("main");
  const result = main.innerHTML;
  const expected = '<ul id="toDoList"></ul>';
  // result === expected
  //   ? console.info("list item is created")
  //   : console.error(
  //       `Expected: <ul id="toDoList"></ul>, Actual: ${main.innerHTML}`
  //     );
  t.equal(result, expected);
});

test("Creates a task item", (t) => {
  const taskList = document.querySelector(".toDoList");
  const result = createTask("Create a presentation for work");
  const expected = `<li class="task"><input type="checkbox" class="checkBox"><p class="taskText">
                  Create a presentation for work
                  </p><button class="deleteButton">delete</button></li> `;
  // result === expected
  //   ? console.info("task is created")
  //   : console.error("Task is not created");
  t.equal(result, expected);
});

// Test 2. Check things off my list so that I can see what I’ve done.
test("Checking an entry marks it as complete", (t) => {
  // test goes here
});

// Test 3. Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", (t) => {
  // test goes here
});

// Stretch. Filter out completed to-dos from my list so that I can focus on what's left to do.
test("Toggling the filter hides completed tasks from the list", (t) => {
  // test goes here
});
