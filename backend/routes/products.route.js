const { Router } = require("express");

const products = Router();

products.get("/", (req, res) => {
  res.send("this is products route");
});

module.exports = products;
