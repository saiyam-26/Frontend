document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const popup = document.getElementById("loginPopup");
  const closePopup = document.getElementById("closePopup");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Empty fields check
    // if (email === "" || password === "") {
    //   alert("Please fill out both fields before submitting.");
    //   return;
    // }

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
      // Send login data to backend
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password, // ✅ lowercase key
        }),
      });

      console.log(email, password);

      const data = await response.json();
      console.log(data);

      if (data.success) {
        // Show popup
        alert("Login Successfull");
        window.location.href = "../HTML/travel.html";
        form.reset();
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server not reachable. Please start backend first.");
    }
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
    // Redirect to homepage if you want
    // window.location.href = "index.html";
  });
});
