const express = require("express");
const route = express.Router();
const path = require("path");

route.get("/users", (req, res) => {
  console.log("users");

  res.sendFile(path.join(__dirname, "..", "views", "user.html"));
});

module.exports = route;
