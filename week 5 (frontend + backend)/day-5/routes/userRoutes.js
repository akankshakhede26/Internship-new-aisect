
const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Get all users
router.get("/", userController.getAllUsers);

// Get one user
router.get("/:id", userController.getUserById);

// Create a user
router.post("/", userController.createUser);

// Dynamic parameter route
router.get("/:id/:section", (req, res) => {
  const { id, section } = req.params;

  res.json({
    userId: id,
    section: section
  });
});

module.exports = router;
