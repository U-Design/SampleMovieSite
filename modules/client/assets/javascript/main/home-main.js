require.config({
	baseUrl : "../assets/javascript",
	paths : {
		angular : "vendor/angular/angular",
		angular_route : "vendor/angular/angular-route",
		angular_resource : "vendor/angular/angular-resource",
		jquery : "vendor/jquery/jquery-2.0.2",
		bootstrap : "vendor/bootstrap/bootstrap.min",
		app : 'custom/app',
		routes : 'custom/routes'
	},
	shim : {
		angular :{
			deps : ['jquery'],
			exports : 'angular'
		},
		bootstrap :{
			deps:['jquery']
		},
		angular_resource:{
			deps:['angular']
		},
		angular_route:{
			deps:['angular'],
			exports : 'angular_route'
		}
	}
});

require([
	'angular',
	'bootstrap',
	'angular_resource',
	'angular_route',
	'app',
	'routes'
	
	], function(angular){
		angular.bootstrap($('body')[0], ['MovieModule']);

});