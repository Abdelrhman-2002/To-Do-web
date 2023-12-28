// Get elements
let addTaskForm = document.getElementById("addTaskForm");
let taskNameInput = document.getElementById("taskName");
let taskDescriptionInput = document.getElementById("taskDescription");
let saveTaskButton = document.getElementById("saveTaskButton");
let addTaskBox = document.querySelector(".box");

// Add event listener to the AddTask box
addTaskBox.addEventListener("click", function () {
    // Display the AddTask form
    addTaskForm.style.display = "block";
});

// Add event listener to the Save Task button
saveTaskButton.addEventListener("click", function () {
    // Validate and save the task
    saveTask();
});

function saveTask() {
    // Get task details from inputs
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;

    // Perform validation
    if (taskName !== '' && taskDescription !== '') {
        // Retrieve existing tasks from local storage
        let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Create a unique ID for the task (you can use a library like uuid for better uniqueness)
        let taskId = new Date().getTime().toString();

        // Create a new task object
        let task = {
            id: taskId,
            name: taskName,
            description: taskDescription,
        };

        // Add the new task to the existing tasks array
        existingTasks.push(task);

        // Save the updated tasks object back to local storage
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        addTaskForm.style.display = "none";

        // Clear input fields
        taskNameInput.value = '';
        taskDescriptionInput.value = '';
    } else {
    
        alert('Please enter both task name and description.');
    }
}
