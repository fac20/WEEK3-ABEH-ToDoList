// Test 1. Add tasks to a list so that I can keep track of them.
test("Submitting a new task adds it to the list", (t) => {
  // test goes here
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
  // test goes here
});

// Stretch. Filter out completed to-dos from my list so that I can focus on what's left to do.
test("Toggling the filter hides completed tasks from the list", (t) => {
  // test goes here
});
