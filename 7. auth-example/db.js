const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT ?? 5000;

const connectToDb = async () => {
  try {
    const url = process.env.MONGO_URI;
    await mongoose.connect(url);
    console.log('Connected to MongoDB with Mongoose');
  } catch (err) {
    console.error('Could not connect to the database', err);
    process.exit(1);
  }
};

module.exports = { connectToDb, PORT };
