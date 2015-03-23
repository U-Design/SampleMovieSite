var express = require('express'),
	path = require('path'),
	app = express();
	app.use(express.static('./'));

app.get("/",function(request,response){
	response.sendFile(path.join(__dirname+"/siteMap.html"));
});

app.listen('5000',function(){
	console.log('Express has started');
});