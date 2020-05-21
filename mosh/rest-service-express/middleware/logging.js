function log(req, res, next) {
  console.log("Custom Midlware");
  next();
}

module.exports = log;
