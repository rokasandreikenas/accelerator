const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // uzkrauna .env faila

const PORT = process.env.PORT ?? 5000;

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("Could not connect to the database", err);
    process.exit(1);
  }
};

module.exports = { connectToDb, PORT };
