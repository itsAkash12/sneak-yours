const { Router } = require("express");

const users = Router();

users.get("/", (req, res) => {
  res.send("This is users route");
});

module.exports = users;
