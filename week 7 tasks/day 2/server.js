
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", require("./routes/authRoutes"));

// Start server after database connection
const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {

    console.error("Database Connection Failed:", error.message);
    process.exit(1);

  }
};

startServer();
