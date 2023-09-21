interface Todo {
  text: string;
  completed: boolean;
}

const todos: Todo[] = [];

const list = document.querySelector("ul")!;
const btn = document.getElementById("todo-btn")! as HTMLButtonElement;
const input = document.getElementById("todo-input")! as HTMLInputElement;
const form = document.querySelector("form")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodoElement(newTodo);
  todos.push(newTodo);

  input.value = "";
};

function createTodoElement(todo: Todo) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.textContent = todo.text;
  li.prepend(checkbox);
  list.appendChild(li);
}

form.addEventListener("submit", handleSubmit);