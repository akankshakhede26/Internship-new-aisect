const express = require("express");

const router = express.Router();

const {
    registerUser,
    login 
} = require("../controllers/authController");

// register route
router.post("/register", registerUser);
// login route
router.post("/login", login);

module.exports = router;