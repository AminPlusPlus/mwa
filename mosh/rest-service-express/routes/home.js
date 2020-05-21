const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { message: "Hello to Api 1.0.0" });
});

module.exports = router;
