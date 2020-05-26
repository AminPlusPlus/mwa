const express = require("express");
const route = express.Router();
const shopController = require("../controllers/shop");

route.get("/products", (req, res) => {
  res.render("products", { pageTitle: "Product" });
});

route.get("/", shopController.getIndex);

module.exports = route;
