const toDoForm = document.getElementById('todo_form');
const toDoInput = document.getElementById('todo_input');
const toDoList = document.getElementById('todo_list');

function saveToDos() {
  localStorage.setItem(todos, JSON.stringify(toDos));
}

function deleteToDo(e) {

}

function createToDo() {

}
const span = document.createElement('span');


const button = document.createElement('button');



button.innerText = 'X';
button.addEventListener('click', deleteToDo)