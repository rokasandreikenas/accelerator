const express = require("express");
const { connectToDb, PORT } = require("./db");
const User = require("./models/User");

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/users", async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

connectToDb().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
