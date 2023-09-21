const list = document.querySelector("ul")!;
const btn = document.getElementById("todo-btn")! as HTMLButtonElement;
const input = document.getElementById("todo-input")! as HTMLInputElement;
const form = document.querySelector("form")!;

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = getTodosFromStorage();
todos.forEach(createTodoElement);

function getTodosFromStorage(): Todo[] {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos === null) return [];
  return JSON.parse(storedTodos);
}

function updateTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodoElement(newTodo);
  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));
  
  input.value = "";
};

function createTodoElement(todo: Todo) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  
  checkbox.addEventListener("change", function() {
    todo.completed = checkbox.checked;
    updateTodos();
  });

  li.textContent = todo.text;
  li.prepend(checkbox);
  list.appendChild(li);
}

form.addEventListener("submit", handleSubmit);