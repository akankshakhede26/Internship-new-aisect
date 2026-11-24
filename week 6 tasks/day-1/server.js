
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully "))
.catch((err) => console.log("MongoDB Connection Error:", err));

// Test route
app.get("/", (req, res) => {
res.send("Server Running & MongoDB Connected ✔");
});

app.listen(process.env.PORT, () => {
console.log(`Server is running on port ${process.env.PORT}`);
});