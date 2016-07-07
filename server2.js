var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8080;

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname + '/'));

app.get('*', function (req, res){
  	res.sendFile(__dirname + '/index.html');
})