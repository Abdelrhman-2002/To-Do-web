document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Retrieve username and password from the form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Check if the user exists (for demonstration purposes, you can replace this with your authentication logic)
  if (username === "demo" && password === "demo123") {
      // Save user information to localStorage using JSON.stringify
      localStorage.setItem("user", JSON.stringify({ username: username, password: password }));

      // Redirect the user to the specified link
      window.location.href = "https://example.com"; // Replace with your link
  } else {
      alert("Invalid username or password");
  }
});
