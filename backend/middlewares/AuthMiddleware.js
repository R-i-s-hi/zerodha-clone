require("dotenv").config();
const User = require("../models/UsersModel");
const jwt = require("jsonwebtoken");


module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;
  console.log("Token received for verification:", token);
  console.log("Cookies received for verification:", req.cookies);

  if (!token) {
    console.log("No token exists");
    return res.status(401).json({ status: false, message: "No token provided" });
  }

  let decoded;
  try {
    decoded = await new Promise((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
    console.log("Decoded token data:", decoded);
  } catch (err) {
    console.log(`JWT verification error: ${err}`);
    return res.status(403).json({
      status: false,
      message: "Invalid token",
      redirectTo: "http://localhost:3000/login"
    });
  }

  try {
    const user = await User.findById(decoded.id);
    if (!user) {
      console.log("No such user exists.");
      return res.status(404).json({
        status: false,
        message: "User not found",
        redirectTo: "http://localhost:3000/login"
      });
    }

    return res.json({ status: true, username: user.username });
  } catch (error) {
    console.error("User lookup error:", error);
    return res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

