document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve signup username and password from the form
    var signupUsername = document.getElementById("signupUsername").value;
    var signupPassword = document.getElementById("signupPassword").value;

    // Retrieve existing users from local storage
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the username is already taken
    var existingUser = existingUsers.find(function (user) {
        return user.username === signupUsername;
    });

    if (existingUser) {
        alert("Username already taken. Please choose another one.");
    } else {
        // Save signup information to local storage
        existingUsers.push({ username: signupUsername, password: signupPassword });
        localStorage.setItem("users", JSON.stringify(existingUsers));

        // Redirect the user to the login page
        window.location.href = "file:///C:/Users/hussi/OneDrive/Desktop/G88_AMIT/Session14/index.html";
    }
});
