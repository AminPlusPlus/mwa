const express = require("express");
const route = express.Router();
const path = require("path");

route.get("/products", (req, res) => {
  console.log("users");
  res.sendFile(path.join(__dirname, "..", "views", "products.html"));
});

route.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = route;
