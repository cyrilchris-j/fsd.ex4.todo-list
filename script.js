const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add elements to li
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    taskInput.focus();
});
