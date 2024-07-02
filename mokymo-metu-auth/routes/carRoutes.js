const express = require("express");

const router = express.Router();

const cars = [];

router.get("/", (req, res) => {
  res.send(cars);
});

router.post("/", (req, res) => {
  // ...
});

module.exports = router;
