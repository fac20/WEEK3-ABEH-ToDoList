// Test 1. Add tasks to a list so that I can keep track of them.
test("Submitting a new task adds it to the list", (t) => {
  //step 1
  const input = document.querySelector(".header__input");
  input.value = "change underpants";
  //step 2
  const submitButton = document.querySelector(".header__button-add");
  submitButton.click();
  //step 3
  const task = document.querySelector(".taskText");
  const result = task.textContent;
  const expected = "change underpants";
  t.equal(result, expected);
});

// Test 2. Check things off my list so that I can see what I’ve done.
test("Checking an entry marks it as complete", (t) => {
  const checkBoxes = document.getElementsByClassName("checkBox");
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].checked = true;
  }
  const result = checkBoxes[0].checked;
  const expected = true;
  t.equal(result, expected);
});

// Test 2.5. Check things off my list so that I can see what I’ve done.
test("Checking an entry moves it to the 'completed' section of the page", (t) => {
  // step 1
  const checkBoxes = document.getElementsByClassName("checkBox");
  checkBoxes[0].checked = true;
  // step 2
  const footer = document.querySelector("footer");
  const result = footer.contains(checkBoxes[0]);
  // test
  t.equal(result, true);
});

// Test 3. Delete things from the list if I don’t need to do them any more
test("Deleting an entry removes it from the list", (t) => {
  const deletedTasks = document.getElementsByClassName("deleteButton");
  const deletedTask;
  
    // for (var i = 0; i < taskList.length; i++) 
      const result = taskList.indexOf(deletedTask);
      if (result > -1) {
        taskList.splice(result, 1);
      }
    
  
  

});

// Stretch. Filter out completed to-dos from my list so that I can focus on what's left to do.
test("Toggling the filter hides completed tasks from the list", (t) => {
  // test goes here
});


// toggle function
let list = document.getElementsByClassName("footer__list-completed");
let i;
for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
