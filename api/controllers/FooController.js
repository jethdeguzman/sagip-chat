/**
 * FooController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
 // index: function (req,res) {
 //   // Get the value of a parameter
 //   // var param = req.param('message');

 //   // // Send a JSON response
 //   // res.json({
 //   //   success: true,
 //   //   message: param
 //   // });
	
 // }
  index : function(req, res){
  	var socket = req.socket;
  	var io = sails.io;
  	var name = req.param('name');
  	var age = req.param('age');
  	var mobile = req.param('mobile');
  	var unit = req.param('unit');
  	var lat  = req.param('lat');
  	var lng  = req.param('lng');
  	var address = req.param('address');
  //	io.sockets.on('name', function(data){
  		io.sockets.emit('report', {name : name, age : age, mobile : mobile, unit : unit, lat : lat, lng : lng, address : address});
  //	});
  	
  	res.json({success : true}); 
  }

};
