document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      alert("Name can contain only letters and spaces.");
      return;
    }

    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  });
});
