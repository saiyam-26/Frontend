






const API_URL = "http://localhost:3000/users";

// Signup Form 
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  let isValid = true;
  if (!username) {
    document.getElementById("usernameError").textContent = "Username is required.";
    isValid = false;
  }
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!passPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number & 1 special symbol.";
    isValid = false;
  }
  if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent = "Passwords do not match.";
    isValid = false;
  }

  if (!isValid) return;
  const response = await fetch(`${API_URL}?username=${username}`);
  const existingUsers = await response.json();

  if (existingUsers.length > 0) {
    document.getElementById("usernameError").textContent = "Username already exists!";
    return;
  }
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  document.getElementById("confirmError").style.color = "green";
  document.getElementById("confirmError").textContent =
    "Signup successful! Redirecting to login...";

  setTimeout(() => (window.location.href = "../HTML/travel.html"), 2000);
});
//Login Form Handler
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter username and password!");
    return;
  }

  const response = await fetch(`${API_URL}?username=${username}&password=${password}`);
  const users = await response.json();

  if (users.length > 0) {
    alert("Login successful!");
  
    window.location.href = "../HTML/travel.html"; // redirect to homepage not working
  } else {
    alert("Invalid username or password!");
  }
});





