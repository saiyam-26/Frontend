document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // REGEX
    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // VALIDATIONS
    if (!nameRegex.test(fullName)) {
      alert("Full Name must be at least 3 letters and contain only alphabets.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (!passRegex.test(password)) {
      alert(
        "Password must be 8+ characters, include uppercase, lowercase, number, and a special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // check if email already exists
      const checkRes = await fetch(
        `http://localhost:3000/users?email=${encodeURIComponent(email)}`
      );
      const existing = await checkRes.json();
      if (existing.length > 0) {
        alert('Email already registered. Try logging in.');
        return;
      }

      const payload = {
        fullName,
        email,
        Password: password
      };

      const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to register');

      const createdUser = await res.json();

      // store logged-in user in localStorage
      localStorage.setItem('loggedUser', JSON.stringify(createdUser));

      // redirect to travel page
      window.location.href = 'travel.html';
    } catch (err) {
      console.error(err);
      alert('Registration failed. Check console for details.');
    }
  });
});

// ----------------------------
// PASSWORD EYE TOGGLE
// ----------------------------
const togglePass = document.getElementById("togglePass");
const toggleCPass = document.getElementById("toggleCPass");

const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");

togglePass.addEventListener("click", () => {
  const isHidden = passwordField.type === "password";
  passwordField.type = isHidden ? "text" : "password";
  togglePass.textContent = isHidden ? "🙈" : "👁️";
});

toggleCPass.addEventListener("click", () => {
  const isHidden = confirmPasswordField.type === "password";
  confirmPasswordField.type = isHidden ? "text" : "password";
  toggleCPass.textContent = isHidden ? "🙈" : "👁️";
});

