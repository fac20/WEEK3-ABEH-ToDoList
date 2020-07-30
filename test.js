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
