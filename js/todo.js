todoForm = document.getElementById("todo-form");
todoInput = document.getElementById("todo-input");
todoList = document.getElementById("todo-list");

let todos = [];
const TODOS_KEY = "todos";

function onSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const newTodo = {
    id: Date.now(),
    content: todo,
  };
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

function paintTodo(todo) {
  const container = document.createElement("div");
  container.classList.add("todo-container");
  container.id = String(todo.id);
  const content = document.createElement("div");
  content.classList.add("todo-content");
  content.innerText = todo.content;
  const btn = document.createElement("button");
  btn.classList.add("todo-button");
  btn.innerText = "✖";
  btn.addEventListener("click", deleteTodo);

  container.appendChild(content);
  container.appendChild(btn);
  todoList.appendChild(container);
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const todoBox = event.target.parentElement;
  todoBox.remove();

  const parsedTodos = JSON.parse(savedTodos);
  console.log(parsedTodos);

  const newTodos = parsedTodos.filter((todo) => todoBox.id !== String(todo.id));
  todos = newTodos;
  saveTodos();
}

todoForm.addEventListener("submit", onSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((todo) => {
    paintTodo(todo);
  });
}
