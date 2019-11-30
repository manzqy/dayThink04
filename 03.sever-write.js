var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
    if (req.url == "/o") {
        fs.readFile("./03.test.html", function(err, data) {
            res.writeHead(200, {"content-type": "text/html;charset=UTF-8"});
            res.end(data);
        })
    } else if (req.url == "/p") {
        fs.readFile("./03.yuan.html", function(err, data) {
            res.writeHead(200, {"content-type":"text/html;charset=UTF-8"});
            res.end(data);
        })
    } else {
        res.writeHead(200, {"content-type":"text/html;charset=UTF-8"});
            res.end('404 not');
    }
})
server.listen(3001,'127.0.0.1');