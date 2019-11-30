var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
  if (req.url == "/fang") {
    fs.readFile("./03.test.html", function(err, data) {
      res.writeHead(200, { "content-type": "text/html;charset=UTF-8" });
      res.end(data);
    });
  } else if (req.url == "/yuan") {
    fs.readFile("./03.yuan.html", function(err, data) {
      res.writeHead(200, { "content-type": "text/html;charset=UTF-8" });
      res.end(data);
    });
  } else {
    res.writeHead(200, { "content-type": "text/html;charset=UTF-8" });
    res.end("hh,not find");
  }
});
server.listen(3000, "127.0.0.1");
