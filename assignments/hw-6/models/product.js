const getDb = require("../util/database").getDb;

let products = [];

module.exports = class Product {
  constructor(_id, title, imageUrl, price, description) {
    this.id = _id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    const db = getDb();
    //this.id = Math.random().toString();
    db.collection("products")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    //products.push(this);
  }

  update() {
    const existingProdIndex = products.findIndex((p) => p.id === this.id);
    products.splice(existingProdIndex, 1, this);
  }

  async static fetchAll() {
    const db = getDb();
    const projection = { _id: 0 };
return await db.collection("products")
      .find()
      .project(projection)
      .toArray()
      .then((result) => {

        return result
        //console.log(products);
      })
      .catch((err) => {});

  }

  static findById(prodId) {
    const db = getDb();
    db.collection("products")
      .find({ _id: new ObjectID(prodId) })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    // return products.find((p) => p.id === prodId);
  }

  static deleteById(prodId) {
    products = products.filter((p) => p.id !== prodId);
  }
};
