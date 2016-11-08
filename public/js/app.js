var socket = io();


socket.on('connect',function (){
	console.log('connected to socket.io server!');
});

socket.on('message', function (message){
	var momentTimestamp = moment.utc(message.timestamp);
	console.log('New message:');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>' + momentTimestamp.format('h:mm a') + ': </strong>' + message.text + '</p>')
});

// Handles submission of new message
var $form = jQuery('#message-form');			//jquery element selector

$form.on('submit', function(event){
	event.preventDefault();

	var $message = $form.find('input[name=message]')

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
});