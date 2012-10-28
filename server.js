// console.log in server gets printed out on terminal


var express = require('express')
  , http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


app.get('/tictactoe.js', function (req, res) {
  res.sendfile(__dirname + '/tictactoe.js');
});




io.sockets.on('connection', function (socket) {
    socket.on('sendmove', function (data) {
      io.sockets.emit('updateboard', data.tileId);
    });

});
