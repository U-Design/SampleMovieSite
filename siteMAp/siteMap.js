var app = angular.module('treeModule', ['ngSanitize']),
	topTabJson=[];

// var prepareRoleJSON = function(roles){
// 	menu.roles = roles.shift();
// };
var copyArr = menujson.concat([]);

var prepareTabJSON = function(arr){
	$.each(arr, function(index, val) {
		 /* iterate through array or object */
		 var menu ={};
		if(index === 0){
			return;
		}else if(val.shift() ==="topTab"){
			menu.topTab = val.shift();
			menu.roles = prepareRoleJSON(val);
			topTabJson.push(menu);
		}
	});	
};
var prepareRoleJSON = function(arr){
	var roleJSON=[];
	$.each(arr, function(index, val) {
		 /* iterate through array or object */
		 var menu ={};
		 if(val.shift()==="Roles"){
		 	menu.role = val.shift();
		 	menu.groupArr = prepareGroupJson(val);
		 	roleJSON.push(menu);
		 }
	});

	return roleJSON;	
};
var prepareGroupJson = function(arr){
	var groupJSON=[];
	$.each(arr, function(index, val) {
		 /* iterate through array or object */
		 var menu={};
		 if(val.shift()==="GroupName"){
		 	menu.group = val.shift();
		 	menu.windowArr = prepareWindowJSON(val);
		 	groupJSON.push(menu);
		 }
	});
	return groupJSON;
};

var prepareWindowJSON = function(arr){
	var windowJSON=[];
	$.each(arr, function(index, val) {
		 /* iterate through array or object */
		 	val.shift();
		 	windowJSON.push(val.shift());
		 
	});
	return windowJSON;	
}

prepareTabJSON(copyArr);


app.directive('topTab', function () {
	return {
		restrict: 'E',
		templateUrl: 'list.html',
		controller : function($scope){
			$scope.topTab = topTabJson,
			$scope.getClass = function(flag){
				return flag? "lastLi":"otherLi";
			}
		}
	};
});