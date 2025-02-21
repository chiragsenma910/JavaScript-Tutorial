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
}
