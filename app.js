function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const removeToDoForm = document.getElementById('removeToDoForm');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the newToDoText
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create a button
    let removeItem = document.createElement('button')

    // set the button's type to button
    removeItem.type = "button";

    // set the button's textContent
    removeItem.textContent = "Remove"

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach remove button to li

    newLi.appendChild(removeItem);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    // add function to remove button
    removeItem.addEventListener('click', event => {
      removeItem.closest('li').remove();
    });
  });
}


window.onload = function() {
  onReady();
};
