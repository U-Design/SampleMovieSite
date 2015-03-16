angular.module('MovieModule').config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'assets/templates/bookingForm.html',
				controller: 'HomePageControler'
			})
});
