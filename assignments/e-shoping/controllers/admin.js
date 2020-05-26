const Product = require("../models/product");

exports.addNewProduct = (req, res, next) => {
  console.log(req.body);

  const name = req.body.name;
  const image = req.body.image;
  const price = req.body.price;
  const desc = req.body.desc;

  const product = new Product(null, name, image, price, desc);
  console.log(product);

  product.save();
  res.redirect("/");
};
