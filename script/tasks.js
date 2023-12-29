
let addTaskForm = document.getElementById("addTaskForm");
let taskNameInput = document.getElementById("taskName");
let taskDescriptionInput = document.getElementById("taskDescription");
let saveTaskButton = document.getElementById("saveTaskButton");
let addTaskBox = document.querySelector(".box");
let currentUser=JSON.parse(window.localStorage.getItem("currentUser"));
let Users=JSON.parse(window.localStorage.getItem("Users"));
let profileImage = document.getElementById("profileImage");


//show current user profile image and username
function profile(){
    profileImage.src=Users[currentUser.UserIndex].Image;
    profileImage.nextElementSibling.innerHTML=currentUser.UserName;
}
profile();

addTaskBox.addEventListener("click", function () {

    addTaskForm.style.display = "block";
});
//feha error
// saveTaskButton.addEventListener("click", function () {
//     saveTask();
// });

function saveTask() {
    let taskDate=document.getElementById("taskDate");
    let taskName = taskNameInput.value;
    let taskDescription = taskDescriptionInput.value;
    if (taskName !== '' && taskDescription !== '') {
        let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let taskId = new Date().getTime().toString();
        let task = {
            userName: currentUser.UserName,
            taskName: taskName,
            description: taskDescription,
            date:taskDate.value
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

