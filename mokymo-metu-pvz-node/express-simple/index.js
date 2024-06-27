const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Express.js server!");
});

app.get("/users", (req, res) => {
  res.send(["rokas"]);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
