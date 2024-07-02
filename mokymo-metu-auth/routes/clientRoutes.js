const express = require("express");

const router = express.Router();

const clients = [{ id: 1, name: "Rokas" }];

router.get("/clients", (req, res) => {
  res.send(clients);
});

router.post("/clients", (req, res) => {
  res.send({ id: 2, name: "Tadas" });
});

module.exports = router;
