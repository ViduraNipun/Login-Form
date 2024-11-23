document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Placeholder authentication check
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "dashboard.html";
  } else {
    document.getElementById('message').textContent = "Invalid username or password.";
  }
});
