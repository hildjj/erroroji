var http = require('http');
var utf8 = require('utf8');

var poo = "\uD83D\uDCA9";
var server = http.createServer(function (request, response) {
  response.writeHead(404, utf8.encode(poo), {'Content-Type': 'text/plain; charset=utf8'});
  response.end(poo);
});

server.listen(3000, function() {
  var addr = server.address();
  console.log("Listening at http://localhost:" + addr.port + "/");
});
