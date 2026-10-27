
require("dotenv").config();

const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const logger = require("./utils/logger");
const errorHandler = require("./middleware/errorHandler");

// Parse JSON request bodies
app.use(express.json());

// Log incoming requests
app.use(logger);

// Home route
app.get("/", (req, res) => {
  res.send("Day 5 Express API is running!");
});

// Register user routes
app.use("/api/users", userRoutes);

// Error handler must come after routes
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `${process.env.APP_NAME || "Express API"} running on port ${PORT}`
  );
});
