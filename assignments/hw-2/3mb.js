const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.write(JSON.stringify({ api: "v1" }));
      res.end();
    }
    if (req.url == "/3mb") {
      res.writeHead(200, { "Content-Type": "application/pdf" });
      const readFile = fs.readFileSync(
        path.join(__dirname + "/USA_latest.pdf")
      );

      res.end(readFile, "binary");
    }
  })
  .listen(3000);
