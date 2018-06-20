var socket = io();
		
socket.on('beforeJoin', function(rooms) {
	var sel = jQuery('#rooms');
	
	if (rooms.length > 0) {
		rooms.forEach(function(room) {
			sel.append(jQuery('<option></option>').val(room).text(room));
		});
		jQuery('#activeRooms').show();
	}
});