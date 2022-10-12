import fs from "fs";
import http from "http";

console.dir(http);

const sever = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify(
      {
        message: "Hello World!",
      },
      null,
      2
    )
  );
});
