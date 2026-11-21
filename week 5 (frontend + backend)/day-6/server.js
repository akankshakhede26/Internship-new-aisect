const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json()); // Middleware

// Routes
app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});