var socket = io.connect('http://localhost:1337');
	socket.on('connect', function(){
		// socket.get('/foo', function (data) { //console.log(data);
		// });
	
		socket.on('message', function(message){
			console.log("Got message:", message + "jeth");
		});
		socket.on('test', function(test){
			console.log("Got test:", test);
		});
	});