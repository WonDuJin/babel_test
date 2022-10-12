"use strict";

var _fs = _interopRequireDefault(require("fs"));
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.dir(_http["default"]);
var sever = _http["default"].createServer(function (req, res) {
  res.writeHead(200, {
    "content-type": "application/json"
  });
  res.end(JSON.stringify({
    message: "Hello World!"
  }, null, 2));
});