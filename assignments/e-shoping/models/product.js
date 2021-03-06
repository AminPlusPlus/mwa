let products = [];

module.exports = class Product {
  constructor(id, name, imageUlr, price, description) {
    this.id = id;
    this.name = name;
    this.imageUlr = imageUlr;
    this.price = price;
    this.description = description;
  }

  save() {
    this.id = Math.random().toString();
    products.push(this);
  }

  update() {
    const existingProdIndex = products.findIndex((p) => p.id === this.id);
    products.splice(existingProdIndex, 1, this);
  }

  static fetchAll() {
    return products;
  }

  static findById(prodId) {
    return products.find((p) => p.id === prodId);
  }

  static deleteById(prodId) {
    products = products.filter((p) => p.id !== prodId);
  }
};
