require("dotenv").config();
const User = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ 
      status: false, 
      message: "No token provided",
      redirectTo: "https://zerodha-clone-landing-page.onrender.com/login"
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      res.clearCookie('token', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        domain: '.onrender.com'
      });
      
      return res.status(404).json({ 
        status: false, 
        message: "User not found",
        // redirectTo: "https://zerodha-clone-landing-page.onrender.com/login"
      });
    }

    return res.json({
      status: true,
      username: user.username
    });
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ status: false, message: "Invalid token", redirectTo: "https://zerodha-clone-landing-page.onrender.com" });
  }
};