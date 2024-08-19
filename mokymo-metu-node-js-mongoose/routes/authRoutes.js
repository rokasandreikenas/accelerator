const express = require("express");
const User = require("../schemas/User");
const router = express.Router();
const { generateToken } = require("../utils/password");

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res.status(404).json({ message: "User exists" });
    }
    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error registering new user.", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = req.body;

    const existingUser = await User.findOne({ email: user.email });
    if (!existingUser) {
      return res.status(401).json({ message: "User does not exists" });
    }

    const isCorrectPassword = await existingUser.isCorrectPassword(
      user.password
    );
    if (!isCorrectPassword) {
      return res.status(401).json({ message: "User password does not match" });
    }

    const token = generateToken({ id: existingUser._id });
    const existingUserWithoutPassword = await User.findOne({
      email: user.email,
    }).select("-password");

    return res.json({ token, user: existingUserWithoutPassword });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error loggin in.", error: error.message });
  }
});

module.exports = router;

// {id: 1264asdas56d852632} + JWT_SECRET generatedToken => asf54a1sdf2a1sf5dsf846sdf4sdf
// asf54a1sdf2a1sf5dsf846sdf4sdf + JWT_SECRET authMiddleware ir darom verify => {id: 1264asdas56d852632}
