// angular.module('MovieModule').config(function ($routeProvider) {
// 		$routeProvider
// 			.when('/', {
// 				templateUrl: 'assets/templates/bookingForm.html',
// 				controller: 'HomePageControler'
// 			})
// });


(function(){

	var dependencies = [

		
	];

	define( dependencies , function(){

		var Config = function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'assets/templates/bookingForm.html'
					//controller: 'HomePageControler'
				});
		};

		return Config;
	});

}());