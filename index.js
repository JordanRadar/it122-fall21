var http = require('http');

// create server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'})
  res.write('Hello World!'); //write response to client
  res.end(); //end response
}).listen(8080); //server will listen on port 8080