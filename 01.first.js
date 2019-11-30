var http = require("http");
var server = http.createServer(function(req, res) {
    res.writeHead(200,{"content-type":"text/html;charset=UTF-8"})
    res.end("这是我的第五个NODE界面哦");
})
server.listen(3000,"127.0.0.1");