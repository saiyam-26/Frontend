// JS/travel.js
document.addEventListener('DOMContentLoaded', () => {
  const registerContainer = document.querySelector('.register'); // parent div in your nav
  const dynamicButton = document.getElementById('dynamic-button'); // existing anchor

  const API_BASE = 'http://localhost:3000/users';

  function createUserWidget(user) {
    // wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'user-widget';

    // avatar circle
    const avatar = document.createElement('div');
    avatar.className = 'avatar-circle';
    avatar.textContent = user.fullName ? user.fullName.trim().charAt(0).toUpperCase() : 'U';

    // name button (acts as dropdown trigger)
    const nameBtn = document.createElement('button');
    nameBtn.className = 'user-name-btn';
    nameBtn.textContent = ' ' + (user.fullName || 'User');

    // dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'user-dropdown';
    dropdown.style.display = 'none';

    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'logout-btn';
    logoutBtn.textContent = 'Logout';

    dropdown.appendChild(logoutBtn);
    wrapper.appendChild(avatar);
    wrapper.appendChild(nameBtn);
    wrapper.appendChild(dropdown);

    // toggle dropdown
    nameBtn.addEventListener('click', () => {
      dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

    // handle logout
    logoutBtn.addEventListener('click', async () => {
      const confirmLogout = confirm('Logout will delete your account from the database. Continue?');
      if (!confirmLogout) return;

      try {
        const res = await fetch(`${API_BASE}/${user.id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete user on server.');

        // cleanup localStorage and UI
        localStorage.removeItem('loggedUser');
        // reload to reflect change
        window.location.reload();
      } catch (err) {
        console.error(err);
        alert('Logout failed. Check console for details.');
      }
    });

    // clicking outside closes dropdown
    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });

    return wrapper;
  }

  function showRegisterLink() {
    // ensure we have anchor that goes to signup
    registerContainer.innerHTML = `<a href="signup.html" id="dynamic-button">Register</a>`;
  }

  // initialize
  (function init() {
    const stored = localStorage.getItem('loggedUser');
    if (!stored) {
      showRegisterLink();
      return;
    }

    const user = JSON.parse(stored);

    // sanity check: verify the user still exists on server
    fetch(`${API_BASE}/${user.id}`)
      .then(r => {
        if (!r.ok) {
          // user not found on server => clear localstorage & show register
          localStorage.removeItem('loggedUser');
          showRegisterLink();
          return null;
        }
        return r.json();
      })
      .then(serverUser => {
        if (!serverUser) return;
        // replace register with avatar + name
        registerContainer.innerHTML = ''; // clear existing
        const widget = createUserWidget(serverUser);
        registerContainer.appendChild(widget);
      })
      .catch(err => {
        console.error('Error verifying user:', err);
        // fallback: show register
        localStorage.removeItem('loggedUser');
        showRegisterLink();
      });
  })();
});








// Chatbot toggle functionality
  const chatbot = document.getElementById("chatbot-container");
  const toggleBtn = document.getElementById("chatbot-toggle");
  const closeBtn = document.getElementById("chat-close");

  // Show full chatbot
  toggleBtn.onclick = () => {
    chatbot.style.display = "flex";
    toggleBtn.style.display = "none";
  };

  // Minimize chatbot
  closeBtn.onclick = () => {
    chatbot.style.display = "none";
    toggleBtn.style.display = "flex";
  };













  document.getElementById("book-now-btn").addEventListener("click", function (e) {
    e.preventDefault();

    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {
            if (users.length === 0) {
                // No user registered → redirect to signup page
                window.location.href = "signup.html";
            } else {
                // User already registered → scroll to offers section
                document.querySelector("#offers").scrollIntoView({ behavior: "smooth" });
            }
        })
        .catch(err => {
            console.error("Error checking user registration:", err);
            // Fallback → send to signup
            window.location.href = "signup.html";
        });
});

document.getElementById("book-now-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const user = localStorage.getItem("loggedUser");

    if (!user) {
        // user is NOT logged in or registered in localStorage
        window.location.href = "signup.html";
    } else {
        // user IS registered -> scroll to offers
        document.querySelector("#offers").scrollIntoView({ behavior: "smooth" });
    }
});








// Handle Best Offers book buttons
document.querySelectorAll(".offer-btn").forEach(btn => {

    btn.addEventListener("click", function(e) {
        e.preventDefault();

        const user = localStorage.getItem("loggedUser");

        if (!user) {
            // Not logged in → go to signup
            window.location.href = "signup.html";
        } else {
            // Logged in → go to the correct page
            const pageToOpen = this.getAttribute("data-page");
            window.location.href = pageToOpen;
        }
    });

});
