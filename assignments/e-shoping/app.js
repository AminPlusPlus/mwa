const express = require("express");
const app = express();
const path = require("path");
const bodyParse = require("body-parser");
const admin = require("./routes/admin");
const shop = require("./routes/shop");

app.use(bodyParse.urlencoded());

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/static", express.static(path.join(__dirname, "public")));

//routes
app.use(admin);
app.use(shop);

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
