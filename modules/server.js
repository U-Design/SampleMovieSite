var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./client'));
//app.use(express.static(path.join(__dirname+'./client')));


var public_dir = "./client/";

app.get("/",function(request,response){
	response.sendFile(path.join(__dirname+"/client/views/homePage.html"));
});

app.listen('5000',function(){
	console.log('Express has started');
});
