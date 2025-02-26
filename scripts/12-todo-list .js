const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

fconsole.log('Rendering todo list...');
console.log('Todo list:', todoList);

todoList.forEach((todoObject, index) => {
  console.log(`Processing todo item ${index + 1}:`, todoObject);
  const { name, dueDate } = todoObject;
  const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button> 
  `;
  console.log('Generated HTML:', html);
  todoListHTML += html;
});

console.log('Updated todo list HTML:', todoListHTML);

document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    console.log(`Adding event listener to delete button ${index + 1}...`);
    deleteButton.addEventListener('click', () => {
      console.log(`Deleting todo item ${index + 1}...`);
      todoList.splice(index, 1);
      console.log('Updated todo list:', todoList);
      renderTodoList();
    });
  });

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    console.log('Adding new todo item...');
    addTodo();
  });

function addTodo() {
  console.log('Getting input values...');
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  console.log('Creating new todo item:', { name, dueDate });
  todoList.push({
    name,
    dueDate
  });

  console.log('Updated todo list:', todoList);
  inputElement.value = '';

  console.log('Rendering updated todo list...');
  renderTodoList();
}unction renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}