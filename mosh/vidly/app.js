const express = require("express");
const app = express();
app.use(express.json());

const movieRoute = require("./routes/movies");
app.use(movieRoute);

const versionApi = {
  version: "v1.0.0",
};

app.get("/", (req, res) => {
  res.send(versionApi);
});

const port = process.env.PORT || 3000;
app.listen(port);
