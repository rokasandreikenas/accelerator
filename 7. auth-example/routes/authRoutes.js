/* eslint-disable no-underscore-dangle */
const express = require('express');
const User = require('../models/User'); // Adjust the path as necessary
const { generateToken } = require('../utils/password');

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await User.findOne({ email: user.email }); // patikrina ar jau egzistuoja
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User(user); // sukuriamas pagal schema
    await newUser.save(); // issaugomas DB
    return res.status(201).json({ message: 'User registered successfully' }); // grazinam atsakyma
  } catch (error) {
    return res.status(500).json({ message: 'Error registering new user.', error: error.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // patikrina ar yra email ir password laukai
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });
    // patikrinama ar yra toks useris
    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    // patikrina ar passwordai sutampa
    if (!(await user.isCorrectPassword(password))) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken({ id: user._id }); // unikalus userio tokenas, pagal kuri mes galime atsekti kas kviecia musu API

    const userWithoutPassword = await User.findById(user._id).select('-password');

    return res.status(200).json({ status: 'success', token, user: userWithoutPassword });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in.', error: error.message });
  }
});

module.exports = router;
