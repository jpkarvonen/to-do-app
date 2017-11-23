function onReady() {
  const toDos = [];
  const addTodoForm = document.getElementById('addToDoForm');
  let id = 0;

  // create delete button
  let removeItem = document.createElement('button')
  removeItem.type = "button";
  removeItem.textContent = "Remove";

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) { return; }

    // increment id variable
    id++;

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      // create delete button
      let removeItem = document.createElement('button')
      removeItem.type = "button";
      removeItem.textContent = "Remove";

      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      // attach the delete button to li
      newLi.appendChild(removeItem);

      // add function to delete button
      removeItem.addEventListener('click', event => {
        toDos.filter(function(toDo){
          return toDos.id != toDo.id;
          renderTheUI();
        });
      });
    });

    addToDoForm.addEventListener('submit', event =>{
    event.preventDefault();
    createNewToDo();
    });
  };


  renderTheUI();
}


window.onload = function() {
  onReady();
};
