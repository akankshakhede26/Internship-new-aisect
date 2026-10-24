
const express = require("express");
const app = express();

// Enable JSON parsing
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Express.js!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
