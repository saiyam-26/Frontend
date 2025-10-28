const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database file path
const dbFilePath = path.join(__dirname, "Database", "db.json");

// Track the current user
let Current_User_Index = null;

// Read DB
function readDB() {
  return JSON.parse(fs.readFileSync(dbFilePath, "utf8"));
}

// Write DB
function writeDB(data) {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
}

// Test route

app.get("/", (req, res) => res.send("Backend running in dreams..."));

// Login API
app.post("/login", (req, res) => {
  try {
    const data = readDB();
    const { userName, Password } = req.body;

    const userIndex = data.findIndex(u => u.userName === userName);

    if (userIndex === -1)
      return res.json({ success: false, message: "User not found!" });

    if (data[userIndex].Password !== Password)
      return res.json({ success: false, message: "Wrong password!" });

    Current_User_Index = userIndex;
    res.json({
      success: true,
      message: "Login successful!",
      user: data[userIndex]
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
