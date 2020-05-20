const fs = require("fs");
const zip = require("zlib");
const path = require("path");

const readFile = fs.createReadStream(path.join(__dirname, "/USA_latest.pdf"));
const writeFile = fs.createWriteStream(
  path.join(__dirname, "/USA_latest.pdf.gz")
);

readFile.pipe(zip.createGunzip().on("error", () => {})).pipe(writeFile);
