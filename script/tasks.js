
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
//----------------------------------------------------------------------------------------------

let upcomingBox = document.querySelector(".box:nth-child(4)");
upcomingBox.addEventListener("click", function () {
    
    displayUpcomingTasks();
});

function displayUpcomingTasks() {
    let upcomingTaskForm = document.getElementById("upcomingTaskForm");
    let upcomingTaskList = document.getElementById("upcomingTaskList");
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    upcomingTaskList.innerHTML = "";
    tasks.forEach(task => {
        let taskItem = document.createElement("li");
        taskItem.classList.add("upcoming-task-item");

        let taskTitle = document.createElement("h3");
        taskTitle.textContent = task.name;

        let taskDescription = document.createElement("p");
        taskDescription.textContent = task.description;

        taskItem.appendChild(taskTitle);
        taskItem.appendChild(taskDescription);

        upcomingTaskList.appendChild(taskItem);
    });
    upcomingTaskForm.style.display = "block";
}

// el dark mode

function toggleDarkMode() {
    let body = document.body;
    let themeIconImage = document.getElementById('themeIconImage');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeIconImage.src = '../Logos/night-mode.png';
        body.style.backgroundColor = '#fff'; // Light mode background color
    } else {
        body.classList.add('dark-mode');
        themeIconImage.src = '../Logos/light-mode.png';
        body.style.backgroundColor = '#1a1a1a'; // Dark mode background color
    }
}
let logo = document.getElementById('logo');

if (logo) {
    logo.addEventListener('click', toggleDarkMode);
}

