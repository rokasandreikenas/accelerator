const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // uzloadin .env faila
// ?? jeigu null arba undefined tada reiksme po desine
// || jeigu reiksme negative tada reiksme po desine

// const a = 0;
// const b = a ?? 5; // 5 // 0
// const c = a || 5; // 5 // 5

const PORT = process.env.PORT ?? 3001; // jei neranda, default bus 3001

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "development" });
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Could not connect to the database", err);
    process.exit(1);
  }
};

module.exports = { connectToDb, PORT };

// const bookst => let books
// prideti dbName prie uzduoties pvz
