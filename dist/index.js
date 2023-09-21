"use strict";
const list = document.querySelector("ul");
const btn = document.getElementById("todo-btn");
const input = document.getElementById("todo-input");
const form = document.querySelector("form");
const todos = getTodosFromStorage();
todos.forEach(createTodoElement);
function getTodosFromStorage() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos === null)
        return [];
    return JSON.parse(storedTodos);
}
function updateTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodoElement(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
;
function createTodoElement(todo) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        updateTodos();
    });
    li.textContent = todo.text;
    li.prepend(checkbox);
    list.appendChild(li);
}
form.addEventListener("submit", handleSubmit);
