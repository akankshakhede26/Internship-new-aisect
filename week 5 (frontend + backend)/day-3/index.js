
const express = require("express");
const app = express();

app.use(express.json());

// Task 1: Home route
app.get("/", (req, res) => {
  res.send("Express API is working...");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

// Contact route
app.post("/contact", (req, res) => {
  res.send("Contact form submitted!");
});

// Task 2: User JSON
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Ananya",
    role: "Intern",
    skills: ["Node.js", "Express.js", "Git"]
  });
});

// Route parameter
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// Query string
app.get("/search", (req, res) => {
  res.json(req.query);
});

// PUT route
app.put("/update", (req, res) => {
  res.send("Data updated using PUT!");
});

// DELETE route
app.delete("/remove", (req, res) => {
  res.send("Data deleted!");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
