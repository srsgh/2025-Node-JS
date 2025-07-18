const http = require("node:http");
const server = http.createServer(function (req, res) {
  if (req.url === "/secretkey") {
    res.end("There isn't any.");
  }
  res.end("Hello World!");
});
server.listen(7777);
