function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        // Create new task item
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        
        // Add click event to mark as completed
        li.onclick = function() {
            li.classList.toggle("completed");
        };

        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
