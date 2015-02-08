var express = require('express')
var app = express();

var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('./bootstrap/index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index);
}).listen(9615);
















//app.set('port', (process.env.PORT || 8080))

//app.use(express.static(__dirname + '/public'))

//app.get('/', function(request, response) {
//  response.send('bootstrap/index.html') })

//app.listen(app.get('port'), function() {
// console.log("Node app is running at localhost:" + app.get('port'))
//})
