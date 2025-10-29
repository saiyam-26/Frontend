




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

    const data = await response.json();
    window.location.href = "../HTML/travel.html";
    if (response.ok) {
      alert(data.message || "User registered successfully!");
      window.location.href = "../HTML/travel.html";
      form.reset();
    } else {
      alert(data.error || "Failed to register user!");
    }
  } catch (error) {
    alert(`Something went wrong! 
Error type: ${error.name}
Message: ${error.message}`);
  }
});

