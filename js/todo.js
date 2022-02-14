const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //  JSON.stringify : 배열 또는 객체 등을 string으로 만들어준다.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 삭제하려고 누른 li태그의 id와 같지 않으면 새로 배열을 만들어서 보여준다. 이대 li.id는 string이기 때문에 형변환을 해줘야 한다.
  saveTodos(); // 삭제 후에 한번 더 배열을 저장해준다.
}

function paintTodo(newTodo) {
  const todo = document.createElement("li");
  todo.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  todo.appendChild(span); // li의 자식 span
  todo.appendChild(button);
  toDoList.appendChild(todo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // input 값 저장
  toDoInput.value = ""; // input 창 비우기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; // 각각의 todo에 id를 부여해서 특정 todo를 삭제할 수 있도록 한다.
  toDos.push(newTodoObj); // 배열에 input 내용들을 저장
  paintTodo(newTodoObj);
  saveTodos(); // 배열에 내용을 넣은 후 localStorage에 저장한다.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo); // forEach : 배열의 각 아이템들에 대해서 function 을 실행하게 함.
}
