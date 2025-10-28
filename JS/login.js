// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.getElementById("loginForm");

//   form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();

//     // Check for empty fields
//     if (email === "" || password === "") {
//       alert("Please fill out both fields before submitting.");
//       return;
//     }

//     // Validate email format
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // Validate password length
//     if (password.length < 8) {
//       alert("Password must be at least 8 characters long.");
//       return;
//     }

//     // Success message
//     alert("Login successful!");
//     form.reset();
//   });
// });
