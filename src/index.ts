const todos = document.querySelector("ul")!;
const btn = document.getElementById("todo-btn")! as HTMLButtonElement;
const input = document.getElementById("todo-input")! as HTMLInputElement;
const form = document.querySelector("form")!;

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo = input.value;
  const li = document.createElement("li");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  li.textContent = newTodo;
  li.prepend(checkbox);

  todos.appendChild(li);

  input.value = "";
};

form.addEventListener("submit", handleSubmit);