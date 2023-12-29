let addTaskBox = document.querySelector(".box");
let currentUser=JSON.parse(window.localStorage.getItem("currentUser"));
let Users=JSON.parse(window.localStorage.getItem("Users"));
let profileImage = document.getElementById("profileImage");
let container=document.getElementById("container");

//show current user profile image and username
function profile(){
    profileImage.src=Users[currentUser.UserIndex].Image;
    profileImage.nextElementSibling.innerHTML=currentUser.UserName;
}
profile();

function displayAddTaskForm(){
    let addTask=`
    <div class="add-task-form">
        <form id="taskForm">
            <label for="taskName">Task Name:</label>
            <input type="text" id="taskName" name="taskName" required>

            <label for="taskDescription">Task Description:</label>
            <textarea id="taskDescription" name="taskDescription" required></textarea>

            <label for="taskDate">Task Date:</label>
            <input type="date" id="taskDate" name="taskDate" required>

            <button class="saveTask" onclick="saveTask()"></button>
        </form>
    </div>
    `
    container.innerHTML=addTask;
}


function saveTask() {
    let taskDate=document.getElementById("taskDate").value;
    let taskName = document.getElementById("taskName").value;
    let taskDescription = document.getElementById("taskDescription").value;
    if (taskName !== '' && taskDescription !== ''&& taskDate!==null) {
        let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let task = {
            userName: currentUser.UserName,
            taskName: taskName,
            description: taskDescription,
            date:taskDate
        };
        existingTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        taskNameInput.value = '';
        taskDescriptionInput.value = '';
    } else {    
        alert('Please enter both task name and description.');
    }
}
//----------------------------------------------------------------------------------------------

function displayUpcomingTasks() {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"));
    let upcomingTasks = '';

    let currentDate = new Date();

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].userName === currentUser.UserName) {
            let taskDate = new Date(tasks[i].date);

            if (taskDate > currentDate) {
                upcomingTasks += `
                    <div class="task" data-task-index="${i}">
                        <div class="taskHeader">
                            <p>${tasks[i].taskName}</p>
                            <button onclick="markTaskAsDone(${i})"></button>
                        </div>
                        <div class="taskBody">
                            <p>${tasks[i].description}</p>
                            <p id="date">${tasks[i].date}</p>
                        </div>
                    </div>
                `;
            }
        }
    }

    container.innerHTML = upcomingTasks;
    
}

// Similar changes in displayTodayTasks and displayInbox functions




function displayTodayTasks() {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"));
    let todayTasks = '';

    let currentDate = new Date();

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].userName === currentUser.UserName) {
            let taskDate = new Date(tasks[i].date);

            // Check if the task's date is equal to today's date
            if (
                taskDate.getDate() === currentDate.getDate() &&
                taskDate.getMonth() === currentDate.getMonth() &&
                taskDate.getFullYear() === currentDate.getFullYear()
            ) {
                todayTasks += `
                    <div class="task" data-task-index="${i}">
                        <div class="taskHeader">
                            <p>${tasks[i].taskName}</p>
                            <button onclick="markTaskAsDone(${i})"></button>
                        </div>
                        <div class="taskBody">
                            <p>${tasks[i].description}</p>
                            <p id="date">${tasks[i].date}</p>
                        </div>
                    </div>
                `;
            }
        }
    }

    container.innerHTML = todayTasks;
}


// el dark mode




function displayInbox() {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"));
    let inboxTasks = '';

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].userName === currentUser.UserName) {
            inboxTasks += `
                <div class="task" data-task-index="${i}">
                    <div class="taskHeader">
                        <p>${tasks[i].taskName}</p>
                        <button onclick="markTaskAsDone(${i})"></button>
                    </div>
                    <div class="taskBody">
                        <p>${tasks[i].description}</p>
                        <p id="date">${tasks[i].date}</p>
                    </div>
                </div>
            `;
        }
    }

    container.innerHTML = inboxTasks;
    
}

// Add this function to your JavaScript
function markTaskAsDone(taskIndex) {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"));

    // Assuming you have a class "task" for both upcoming and inbox tasks
    let taskElement = document.querySelector(`.task[data-task-index="${taskIndex}"]`);

    if (taskElement) {
        // Remove the task from the UI
        taskElement.remove();

        // Remove the task from the tasks array
        tasks.splice(taskIndex, 1);

        // Update the tasks in local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Task marked as done!');
    }
}



//get the theme that is saved in the memory
if (localStorage.getItem("theme")){
    let theme = JSON.parse(window.localStorage.getItem("theme"));
    let body = document.body;
    let themeIconImage = document.getElementById('themeIconImage');
    if (theme=="light-mode") {
        body.classList.remove('dark-mode');
        themeIconImage.src = '../Logos/night-mode.png';
        body.style.backgroundColor = '#fff'; // Light mode background color
        window.localStorage.setItem("theme",JSON.stringify("light-mode"));//save the theme as light mode in the browser
    } else {
        body.classList.add('dark-mode');
        themeIconImage.src = '../Logos/brightness.png';
        body.style.backgroundColor = '#1a1a1a'; // Dark mode background color
        window.localStorage.setItem("theme",JSON.stringify("dark-mode"));//save the theme as night mode in the browser
    }
}


function toggleDarkMode() {
    let body = document.body;
    let themeIconImage = document.getElementById('themeIconImage');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeIconImage.src = '../Logos/night-mode.png';
        body.style.backgroundColor = '#fff'; // Light mode background color
        window.localStorage.setItem("theme",JSON.stringify("light-mode"));//save the theme as light mode in the browser
    } else {
        body.classList.add('dark-mode');
        themeIconImage.src = '../Logos/brightness.png';
        body.style.backgroundColor = '#1a1a1a'; // Dark mode background color
        window.localStorage.setItem("theme",JSON.stringify("dark-mode"));//save the theme as night mode in the browser
    }
}
let logo = document.getElementById('logo');

if (logo) {
    logo.addEventListener('click', toggleDarkMode);
}

