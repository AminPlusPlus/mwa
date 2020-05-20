const fs = require("fs");

// const file = fs.readFileSync("./names.txt", "utf-8");
// console.log(file);

// const fileStream = fs.readFile("./names.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.writeFileSync("./user.txt", "Hello I'm Aminjoni", "utf-8");

console.log("loading");
