/**
 * ChatController
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
 index : function(req, res){
 	res.header("Access-Control-Allow-Origin", "*");
 	var socket = req.socket;
	var io = sails.io;	
	var chatmsg = req.param('chatmsg');
	var user = req.param('user');
	var userpic = req.param('userpic');
	var to = req.param('to');
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var timenow = hour + ":" + min + ":" + sec;
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var datenow = year + "-" + month + "-" + day;
	var datetime = datenow + " " + timenow;


	Chat.create({to : to, from : user, message : chatmsg, userpic: userpic, date : datetime}).done(function(error){
		if (error){
			res.send(error);
		}
	});
	io.sockets.emit('new message', {chatmsg : chatmsg, user : user, userpic : userpic, datetime : datetime, to:to});
	io.sockets.emit(user, {chatmsg : chatmsg, user : user, userpic : userpic, datetime : datetime, to:to});
		
 	res.json({success : true}); 
 },
 online : function(req, res){
  	res.header("Access-Control-Allow-Origin", "*");
  	var socket = req.socket;
 	var io = sails.io;
 	var userid = req.param('userid');
 	var username = req.param('username');
 	var profilepic = req.param('profilepic');

 	io.sockets.emit('online', {userid : userid, username : username, profilepic : profilepic});

 },
 offline : function(req, res){
  	res.header("Access-Control-Allow-Origin", "*");
  	var socket = req.socket;
 	var io = sails.io;

 	var username = req.param('username');
 
 	io.sockets.emit('offline', {username : username});
 	res.json({success : true});
 },

 save : function(req, res){
 	Chat.create({id : '',to : 'admin', from : 'jeth', message : 'hello'}).done(function(error){
 		if (error){
 			res.send(error);
 		}
 	});
 	res.send('added');
 }

};
