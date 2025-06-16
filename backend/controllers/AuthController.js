const User = require("../models/UsersModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

// Signup Controller
module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password, createdAt } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({ email, username, password, createdAt });
    const token = createSecretToken(user);

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      },
      redirectTo: "https://zerodha-clone-dashboard-2zpz.onrender.com",
      token
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login Controller
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createSecretToken(user);

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      },
      redirectTo: "https://zerodha-clone-dashboard-2zpz.onrender.com",
      token
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};