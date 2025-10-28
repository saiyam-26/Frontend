
// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.getElementById("signupForm");

//   form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     const fullname = document.getElementById("fullname").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const confirmPassword = document.getElementById("confirmPassword").value.trim();

//     // Empty field check
//     if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
//       alert("Please fill out all fields before submitting.");
//       return;
//     }

//     // Name validation (letters and spaces only)
//     const namePattern = /^[A-Za-z\s]+$/;
//     if (!namePattern.test(fullname)) {
//       alert("Name can contain only letters and spaces.");
//       return;
//     }

//     if (fullname.length < 2) {
//       alert("Name must be at least 2 characters long.");
//       return;
//     }

//     // Email validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // Password validation
//     if (password.length < 8) {
//       alert("Password must be at least 8 characters long.");
//       return;
//     }

//     // Confirm password validation
//     if (password !== confirmPassword) {
//       alert("Passwords do not match. Please re-enter.");
//       return;
//     }

//     // Success message
//     alert("Registration successful!");
//     form.reset();
//   });
// });





const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = form.fullname.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (!fullname || !email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, password }),
    });

    const data = await response.json(); // 👈 must read JSON here

    if (response.ok) {
      alert(data.message || "User registered successfully!");
      form.reset(); // clear form
    } else {
      alert(data.error || "Failed to register user!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong! Please try again.");
  }
});

