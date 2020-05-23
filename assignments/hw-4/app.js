const express = require("express");
const app = express();
const path = require("path");
const bodyParse = require("body-parser");
const users = require("./routes/users");
const products = require("./routes/products");

app.use(bodyParse.urlencoded());
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

//routes
app.use(users);
app.use(products);

//404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send("Something Wrong");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Locahost");
});
