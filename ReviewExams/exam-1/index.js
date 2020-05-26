// const express = require("express");
// const app = express();
// //jtrumpdonald

// app.use("/", (req, res, next) => {
//   //next(new Error("Request is not good"));
//   next(new Error("Up Here"));
//   app.use("/", (req, res, next) => {
//     res.send("Nested Trigger");
//     next(new Error("From Nested"));
//   });
//   //next();
// });

// app.use((req, res, next) => {
//   console.log("Here is Trigger");

//   res.send("<h1> Not Found </h1>");
// });

// app.use((err, req, res, next) => {
//   res.status(500).send(err.message);
// });

// app.listen(3000);

console.log("start");
setTimeout(() => {
  console.log("timeout 1");
}, 0);
fs.readFile(path.join(__dirname, "greet.txt"), "utf8", function (err, data) {
  setTimeout(() => {
    console.log("timeout 2");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
  process.nextTick(() => console.log("nexttick 1"));
});
process.nextTick(() => console.log("nexttick 2"));
console.log("Done!");
