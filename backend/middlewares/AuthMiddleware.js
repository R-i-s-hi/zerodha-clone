require("dotenv").config();
const User = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ status: false, message: "No token provided" });
  }
  if (!authHeader) return res.json({ status: false });
  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    return res.json({ status: true, username: user.username });
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ status: false, message: "Invalid token" });
  }
};