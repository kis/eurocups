var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 8080;

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname + '/'));

app.get('*', function (req, res){
  	res.sendFile(__dirname + '/index.html');
})

var numUsers = 0;

io.on('connection', function (socket) {
	console.log('next user connected')

	socket.on('new message', function (data) {
		io.sockets.emit('new message', data);
	});

	socket.on('new move', function (move) {
		io.sockets.emit('new move', move);
	});

	socket.on('new user', function (data) {
		io.sockets.emit('new user', data);
		// if (addedUser) return;

		// we store the username in the socket session for this client
		/*socket.username = username;
		++numUsers;
		addedUser = true;
		socket.emit('login', {
			numUsers: numUsers
		});
		// echo globally (all clients) that a person has connected
		socket.broadcast.emit('user joined', {
			username: socket.username,
			numUsers: numUsers
		});*/
	});

	socket.on('disconnect', function () {
		io.sockets.emit('disconnect user', data);
		/*if (addedUser) {
			--numUsers;

	    	// echo globally that this client has left
	    	socket.broadcast.emit('user left', {
	    		username: socket.username,
	    		numUsers: numUsers
	    	});
	    }*/
	});

});