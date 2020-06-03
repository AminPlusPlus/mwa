const express = require("express");
const DB = require("mongodb");
const app = express();

DB.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then((client) => {
    console.log(`Connected`);
    const db = client.db("exam2").collection("restourant");

    db.find({}).toArray(function (err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });

    client.close();
  })
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
