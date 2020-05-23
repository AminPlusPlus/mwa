const express = require("express");
const app = express();
const path = require("path");
const bodyParse = require("body-parser");

app.use(bodyParse.urlencoded());
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.use("/product", (req, res, next) => {
  console.log(req.body); // { title: 'book' }
  res.redirect("/");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Locahost");
});
