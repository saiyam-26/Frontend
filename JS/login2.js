form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Password validation
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  try {
    // 👉 Check user in JSON-SERVER database
    const checkRes = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(email)}`);
    const users = await checkRes.json();

    if (users.length === 0) {
      // ❌ No such email
      alert("User not registered! Please sign up first.");
      return;
    }

    const user = users[0];

    // 👉 Match password
    if (user.Password !== password) {
      alert("Incorrect password!");
      return;
    }

    // 👉 Save logged user so travel.html shows user name
    localStorage.setItem("loggedUser", JSON.stringify(user));

    // 👉 Redirect to main page
    window.location.href = "../HTML/travel.html";

  } catch (error) {
    console.error(error);
    alert("Server not reachable. Please start backend first.");
  }
});
