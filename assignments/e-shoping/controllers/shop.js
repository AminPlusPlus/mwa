const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  res.render("home", { pageTitle: "Home", items: Product.fetchAll() });
};
