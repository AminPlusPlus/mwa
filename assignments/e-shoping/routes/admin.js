const express = require("express");
const route = express.Router();
const controller = require("../controllers/admin");

route.get("/admin", (req, res) => {
  res.render("admin");
});

route.post("/products", controller.addNewProduct);

module.exports = route;
