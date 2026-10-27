const express = require("express");
const app = express();

// Built-in Middleware
app.use(express.json());

// Custom Middleware
const logger = require("./middleware/logger");
app.use(logger);

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Error Handling Middleware (Last)
// Must have 4 parameters
app.use((err, req, res, next) => {
console.error("Error:", err.message);
res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
app.listen(3000, () => {
console.log("Server running on port 3000");
});