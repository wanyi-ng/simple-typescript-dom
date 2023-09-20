"use strict";
const todos = document.querySelector("ul");
const btn = document.getElementById("todo-btn");
const input = document.getElementById("todo-input");
const form = document.querySelector("form");
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = input.value;
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.textContent = newTodo;
    li.prepend(checkbox);
    todos.appendChild(li);
    input.value = "";
}
;
form.addEventListener("submit", handleSubmit);
