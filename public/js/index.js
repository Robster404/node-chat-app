var socket = io();
		
socket.on('connect', function() {
	console.log('Connected to server');
	
	socket.emit('createMessage', {
		from: 'Rob',
		text: 'Hey. This is Rob'
	});
});

socket.on('disconnect', function() {
	console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('newMessage', message);
});