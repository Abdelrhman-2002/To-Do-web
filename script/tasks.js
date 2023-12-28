
let addTaskForm = document.getElementById("addTaskForm");
let taskNameInput = document.getElementById("taskName");
let taskDescriptionInput = document.getElementById("taskDescription");
let saveTaskButton = document.getElementById("saveTaskButton");
let addTaskBox = document.querySelector(".box");
addTaskBox.addEventListener("click", function () {

    addTaskForm.style.display = "block";
});

saveTaskButton.addEventListener("click", function () {
    
    saveTask();
});

function saveTask() {
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    if (taskName !== '' && taskDescription !== '') {
        let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let taskId = new Date().getTime().toString();
        let task = {
            id: taskId,
            name: taskName,
            description: taskDescription,
        };
        existingTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        addTaskForm.style.display = "none";
        taskNameInput.value = '';
        taskDescriptionInput.value = '';
    } else {    
        alert('Please enter both task name and description.');
    }
}
