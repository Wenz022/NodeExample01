//const uuid4 = require("uuid4");
//console.log(uuid4());
/*

const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Server");
    response.end();
  })
  .listen(3000);

*/

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("express start");
});
app.get("/fast", (req, res) => {
  res.send("fast start!!!");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
