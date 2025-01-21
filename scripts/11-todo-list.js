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
    for(let i=0;i<todoList.length;i++){
      const todoObject =todoList[i];
      //destructuring const name=todoObject.name;
      //destructuring const dueDate=todoObject.dueDate;
      const { name, dueDate }= todoObject;
      const html = `
      <div>${name}</div>
       <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
      todoListHTML +=html;
    }
    //console.log(todoListHTML);
    document.querySelector('.js-todo-list')
    .innerHTML =todoListHTML;

}

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
