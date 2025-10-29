// --- Step 1: Create an empty list to store offers ---
let travelOffers = [];

// --- Step 2: Load data from "travel.json" file ---
fetch("../Database/travel.json")
  .then(response => response.json()) // Convert file data to JavaScript object
  .then(data => {
    travelOffers = data; // Save data in variable
    console.log("✅ Travel offers loaded:", travelOffers);
  })
  .catch(error => console.log("❌ Error loading offers:", error));

// --- Step 3: Connect HTML elements ---
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// --- Step 4: Function to add chat messages ---
function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = sender === "user" ? "user-message" : "bot-message";
  messageDiv.textContent = text;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight; // Always scroll to bottom
}

// --- Step 5: Chatbot reply logic ---
function botReply(userMsg) {
  const msg = userMsg.toLowerCase();
  let reply = "";

  // If data not loaded yet
  if (travelOffers.length === 0) {
    reply = "Please wait... loading the latest travel offers 🕒";
    addMessage(reply, "bot");
    return;
  }

  // --- If user mentions a budget like "under 40000" ---
  const budget = msg.match(/\d+/); // Find number in message
  if (budget) {
    const limit = parseInt(budget[0]);
    const filtered = travelOffers.filter(o => o.price <= limit);

    if (filtered.length > 0) {
      reply = `Here are trips under ₹${limit}:\n`;
      filtered.forEach(o => {
        reply += `• ${o.destination} – ₹${o.price} (${o.nights} nights)\n`;
      });
    } else {
      reply = "Sorry 😔 no offers under that budget.";
    }
  }

  // --- If user mentions a destination ---
  else {
    const found = travelOffers.find(o => msg.includes(o.destination.toLowerCase()));

    if (found) {
      reply = `${found.destination} trip is ₹${found.price} for ${found.nights} nights. Want to book it?`;
    } else if (msg.includes("flight")) {
      reply = "We have flight offers to many destinations ✈️ Where would you like to go?";
    } else if (msg.includes("hotel")) {
      reply = "We have both luxury and budget hotels 🏨 Want to see some options?";
    } else if (msg.includes("hi") || msg.includes("hello")) {
      reply = "Hello 👋 I'm your Travel Assistant! Ask me about offers, hotels, or destinations.";
    } else {
      reply = "Sorry, I didn’t get that 😅 Try saying 'under 50000' or a place name like 'Goa'.";
    }
  }

  addMessage(reply, "bot");
}

// --- Step 6: When send button is clicked ---
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    addMessage(message, "user");   // Show user message
    userInput.value = "";          // Clear input box
    setTimeout(() => botReply(message), 500); // Bot replies after short delay
  }
});


// Google Map Initialization
// ================================
function initMap() {
// Set map location to Chitkara University, Rajpura, Punjab
const location = { lat: 30.5161, lng: 76.6595 };

  // Create map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6, // zoom level
    center: location,
  });

  // Add marker
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Travellers Office - New Delhi",
  });
}

// ================================
// Example: Form Submit Message
// ================================
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for contacting Travellers! We'll get back to you soon ✈️");
    form.reset();
  });
}