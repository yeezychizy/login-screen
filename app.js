document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // Check if password and confirm password are the same
  
    // Check if username and password are correct
    if (username === "admin" && password === "password") {
      // Successful login, redirect to home page
      window.location.href = "home.html";
    } else {
      // Failed login, display error message
      document.getElementById("error-message").textContent = "Invalid username or password";
    }
  });
  