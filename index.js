
const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database file path
const dbFilePath = path.join(__dirname, "Database", "db.json");

// Read DB
function readDB() {
  if (!fs.existsSync(dbFilePath)) return [];
  return JSON.parse(fs.readFileSync(dbFilePath, "utf8"));
}

// Write DB
function writeDB(data) {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
}

// Test route
app.get("/", (req, res) => res.send("✅ Backend is running properly!"));

// SIGNUP ROUTE
app.post("/signup", (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const data = readDB();

    // Check if email already exists
    const existingUser = data.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists!" });
    }

    // Create new user
    const newUser = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      fullName: fullname,
      email,
      Password: password,
    };

    data.push(newUser);
    writeDB(data);

    res.status(200).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//  LOGIN ROUTE
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    const data = readDB();

    const user = data.find((u) => u.email === email);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found!" });
    }

    if (user.Password !== password) {
      return res.status(401).json({ success: false, message: "Incorrect password!" });
    }

    res.json({
      success: true,
      message: "Login successful!",
      user: { id: user.id, fullName: user.fullName, email: user.email },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
