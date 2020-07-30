// Test 1. Add tasks to a list so that I can keep track of them.
test("Submitting a new task adds it to the list", (t) => {
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
const input = document.querySelector(".header__input");
  //step 1
input.value = "random text";
  //step 2
const submitButton = document.querySelector(".header__button-add");
  //step 3
submitButton.click();
const taskItem = input.value;
const expected = "change underpants";
  t.equal(resultvalue, expected);
  // result.textContent = "";
});


// const result = document.querySelector(".taskText");
// result.append(template.content.cloneNode(true));
// document.body.append(result);
// result.appendChild(document.createTextNode(input.value));


// example for cloning template element:
{/* <template id="template">
      <li class="task">
          <input type="checkbox" class="checkBox">
            <p class="taskText"></p>
            <button class="deleteButton">delete</button>
      </li> 
</template>

  <div id="elem">Click me</div>

<script>
  let elem = document.createElement('.taskTest');

  // Clone the template content to reuse it multiple times
  elem.append(template.content.cloneNode(true));

  document.body.append(elem);
  // Now the script from <template> runs
</script> */}


// step 1 -   // test goes here



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
