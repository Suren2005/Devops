const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add a new task
addBtn.addEventListener("click", () => {
    const task = input.value.trim();
    if (task === "") return alert("Please enter a task!");

    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
    todoList.appendChild(li);
    input.value = "";
});

// Delete a task
function deleteTask(button) {
    const li = button.parentElement;
    todoList.removeChild(li);
}
