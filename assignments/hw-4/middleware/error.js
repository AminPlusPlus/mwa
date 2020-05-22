const path = require("path");

function notFoundPage(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "404.html"));
  next();
}

module.exports = notFoundPage;
