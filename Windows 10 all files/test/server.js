const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Allow requests from front-end

const DATA_FILE = "./Data/Person.json";

// 📌 Fetch Data
app.get("/users", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to read data" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// 📌 Add New User
app.post("/users", (req, res) => {
  const newUser = req.body;

  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read data" });

    let users = JSON.parse(data);
    users.push(newUser);

    fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Failed to save data" });

      res.json({ message: "User added successfully", user: newUser });
    });
  });
});

// Start server on port 3000
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
