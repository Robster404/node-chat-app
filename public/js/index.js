var socket = io();
		
socket.on('beforeJoin', function(rooms) {
	var sel = jQuery('#rooms');
	
	rooms.forEach(function(room) {
		sel.append(jQuery('<option></option>').val(room).text(room));
	});
});