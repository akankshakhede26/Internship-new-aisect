
const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {

  try {

    // 1. Get user data
    const { name, email, password } = req.body;

    // 2. Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // 3. Validate name
    if (!name.trim()) {
      return res.status(400).json({
        message: "Name cannot be empty"
      });
    }

    // 4. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        message: "Please enter a valid email"
      });
    }

    // 5. Validate password length
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters"
      });
    }

    // 6. Check duplicate email
    const existingUser = await User.findOne({
      email: email.trim().toLowerCase()
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    // 7. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 8. Create user
    const newUser = await User.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword
    });

    // 9. Send successful response
    return res.status(201).json({
      message: "User registered successfully",

      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });

  } catch (error) {

    console.error(error);

    // Handle duplicate email race condition
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    return res.status(500).json({
      message: "Server error"
    });
  }
};
