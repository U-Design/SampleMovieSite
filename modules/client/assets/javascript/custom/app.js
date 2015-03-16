// angular.module('MovieModule', ['ngRoute','ngResource']);
(function(){

	var dependencies =['angular','routes','angular_route','angular_resource'];

	define( dependencies , function(angular,Config){

		angular.module('MovieModule',['ngRoute','ngResource'])
			.config(Config);
	});

}());