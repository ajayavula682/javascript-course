const todoList =[{
  name:'make dinner',
  dueDate:'2022-12-22'
},{
  name: 'wash dishes',
  dueDate:'2022-12-22'
}];

renderTodoList();
function renderTodoList()
{
    let todoListHTML ='';

    todoList.forEach((todoObject, index) =>{
      
      const { name, dueDate }= todoObject;
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index},1);
        renderTodoList();
        " class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
      todoListHTML +=html;
    });
    //console.log(todoListHTML);
    document.querySelector('.js-todo-list')
    .innerHTML =todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton,index) => {
        deleteButton.addEventListener('click',() => {
          todoList.splice(${index},1);
        renderTodoList();

      });
    //document.querrySelectorAll()--> that gives all the button in the DOM

}

document.querySelector('.js-add-todo-button')
.addEventListener('click', ()=>{
  addToDo();
});

function addToDo()
{
 const inputElement =document.querySelector('.js-name-input');//Dom to access the value of html in JS
 const name = inputElement.value;
 const dateInputElement= document.querySelector(
'.js-due-date-input');
const dueDate =dateInputElement.value;
 todoList.push({
  name: name,
  dueDate: dueDate});
 //console.log(todoList);
 inputElement.value ='';
 renderTodoList();
}
