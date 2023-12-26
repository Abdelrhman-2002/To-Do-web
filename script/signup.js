// document.getElementById("signupForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Retrieve signup username and password from the form
//     var signupUsername = document.getElementById("signupUsername").value;
//     var signupPassword = document.getElementById("signupPassword").value;

//     // Check if the username is already taken (for demonstration purposes, you can replace this with your logic)
//     var existingUser = localStorage.getItem(signupUsername);
//     if (existingUser) {
//         alert("Username already taken. Please choose another one.");
//     } else {
//         // Save signup information to localStorage
//         localStorage.setItem(signupUsername, signupPassword);

//         // Redirect the user to the login page (replace with your login page URL)
//         window.location.href = "file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/Session14/index.html";
//     }
// });
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve signup username and password from the form
    var signupUsername = document.getElementById("signupUsername").value;
    var signupPassword = document.getElementById("signupPassword").value;

    // Check if the username is already taken (for demonstration purposes, you can replace this with your logic)
    var existingUser = localStorage.getItem(signupUsername);
    if (existingUser) {
        alert("Username already taken. Please choose another one.");
    } else {
        // Save signup information to localStorage
        localStorage.setItem(signupUsername, signupPassword);

        // Redirect the user to the login page (replace with your login page URL)
        window.location.href = "file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/Session14/index.html";
    }
});