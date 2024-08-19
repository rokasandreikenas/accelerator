const express = require("express");
const app = express(); // sukuriam instance

app.get("/users", (req, res) => {
  res.json(["rokas", "Tomas"]);
});

app.get("/items", (req, res) => {
  res.json([{ id: 1, title: "iPhone 16" }]);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Express.js server!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
