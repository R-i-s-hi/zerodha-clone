const User = require("../models/UsersModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {

    const { email, username, password, createdAt } = req.body;

    if (!email || !username || !password || !createdAt) {
      return res.json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, username, password, createdAt });
    const token = createSecretToken(user);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000
    });
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
    return res.json({ message: "Internal Server Error", status: 500 });
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
    console.log(`User found: ${user}`); // For debugging purposes
    if(!user){
      res.status(401).json('Incorrect password or email');
      return;
    }

    const auth = await bcrypt.compare(password,user.password);
    if (!auth) {
      return res.status(401).json('Incorrect password or email'); 
    } else {
      const token = createSecretToken(user._id);
      console.log("Generated Token:", token);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000
      });
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