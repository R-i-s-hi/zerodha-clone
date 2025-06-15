const User = require("../models/UsersModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

cookieOption = { httpOnly: true, secure: true, sameSite: "None", maxAge: 24 * 60 * 60 * 1000 }

module.exports.Signup = async (req, res, next) => {
  try {

    const { email, username, password, createdAt } = req.body;

    if (!email || !username || !password) {
      return res.json({ message: "All fields are required", redirectTo: "http://localhost:3000/signup" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, username, password, createdAt });
    const token = createSecretToken(user);
    res.cookie("token", token, cookieOption);
    console.log(`Ceated User: ${user}`);
    console.log(`Created Cookie(Signup): ${res.cookie}`);
    console.log(`Created token(Login): ${res.cookie.createdAt}`);

    res.json({ message: "User signed in successfully",
              success: true,
              redirectTo: "http://localhost:3001",
              user
            });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.json({ message: "Internal Server Error", status: 500, redirectTo: "http://localhost:3000/signup" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if(!email || !password ){
      res.json({ message: "Email and password are required" });
      return;
    }

    const user = await User.findOne({ email });
    console.log(`User found(Login): ${user}`); // For debugging purposes
    if(!user){
      res.status(401).json({message: 'Incorrect password or email'});
      return;
    }

    const auth = await bcrypt.compare(password,user.password);
    if (!auth) {
      return res.status(401).json({message: 'Incorrect password or email'}); 
    } else {
      const token = createSecretToken(user);
      console.log("Generated Token:", token);
      res.cookie("token", token, cookieOption);
      console.log(`Created Cookie(Login): ${req.headers.cookie}`); // res.cookie will only set token in browser, not give info
    }

    res.json({ 
      message: "User logged in successfully", 
      success: true,
      redirectTo: "http://localhost:3001",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.log(`Login error: ${error}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports.Logout = async (req, res, next) => {
  try {
    res.clearCookie("token", cookieOption);
    console.log(`Cleared Cookie(Logout): ${req.headers.cookie}`);
    res.json({ message: "User logged out successfully", success: true });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}