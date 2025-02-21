function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // Remove task on click
    li.onclick = function () {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);
    taskInput.value = ""; // Clear input field
    saveTasks();
}

// Save tasks to Local Storage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => tasks.push(li.textContent));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from Local Storage
function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;

        li.onclick = function () {
            this.remove();
            saveTasks(); // Save updated list to Local Storage
        };

        document.getElementById("taskList").appendChild(li);
    });
}
loadTasks();
