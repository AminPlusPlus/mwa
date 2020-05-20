const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Home");
  res.end();
});

server.listen(3000);
console.log("Connection");
