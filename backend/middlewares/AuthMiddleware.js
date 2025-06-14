require("dotenv").config();
const User = require("../models/UsersModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {

  const token = req.cookies.token;
  console.log("Token received for verification:", token);
  console.log("Cookies recieved for verification:", req.cookies);
  
  if (!token) {
    console.log("no token exists");
    return res.status(401).json({ status: false, message: "No token provided" });
  }


  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    console.log("Decoded token data:", data);

    if (err) {
      console.log(`verify error: ${err}`);
      return res.status(403).json({ status: false, message: "Invalid token", redirectTo: "http://localhost:3001/login" });
    }

    const user = await User.findById(data.id);
    if (!user){
      console.log("no such user exists.");
      return res.status(404).json({ status: false, message: "User not found", redirectTo: "http://localhost:3001/login" });
    } 
    
    return res.json({ status: true, username: user.username });
  });
};