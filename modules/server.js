var express = require('express');
	path = require('path'),
	app = express(),
	mysql = require('mysql');

var dbConnect = mysql.createConnection({
	host :"localhost",
	user :"root",
	password :"password",
	database :"Movie_DB"
});


app.use(express.static('./client'));
//app.use(express.static(path.join(__dirname+'./client')));


var public_dir = "./client/";

app.get("/",function(request,response){
	response.sendFile(path.join(__dirname+"/client/views/homePage.html"));
});

app.listen('5000',function(){
	console.log('Express has started');
});
