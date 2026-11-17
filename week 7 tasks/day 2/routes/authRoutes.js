
const express = require("express");

const router = express.Router();

const {
  registerUser
} = require("../controllers/authController");

// POST registration route
router.post("/register", registerUser);

module.exports = router;
