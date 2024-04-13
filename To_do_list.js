let tasks = [];

function addTask() {
    const taskInput = document.getElementById("addTaskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = "";
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("added-task");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className="checkbox"
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(index));
        li.appendChild(checkbox);
        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.className = "task" + (task.completed ? " completed" : "");
        li.appendChild(taskText);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener('click', () => deleteTask(index));
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    })
}