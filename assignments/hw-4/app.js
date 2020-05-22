const express = require("express");
const app = express();
const notFoundPage = require("./middleware/error");
const debug = require("debug")("app");

app.use(notFoundPage);
app.use(express.json);

app.get("/", (req, res) => {
  res.status(404);
});

console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  debug(`Localhost Started on port : ${port}`);
});
