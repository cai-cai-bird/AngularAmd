require.config({
    paths: {
        // angular
        "angular": "bower_components/angular/angular",

        // angular-ui
        "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router",

        // angularAMD
        "angularAMD": "bower_components/angularAMD/angularAMD",
        "ngload": "bower_components/angularAMD/ngload"
    },
    shim: {         
        // angular
        "angular": { exports: "angular" },
        // angular-ui
        "angular-ui-router": ["angular"],
        // angularAMD
        "angularAMD": ["angular"],
        "ngload": ["angularAMD"]
    }
});
define(["angular", "angularAMD", "angular-ui-router"], function (angular, angularAMD) {        
    var app=angular.module("app",["ui.router"]);
	app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	    // default
    	//$urlRouterProvider.otherwise("/");
		$urlRouterProvider.when("","/main");
		
		$stateProvider.state('main',{
			url:"/main",
	    	templateUrl:'views/public.html'
		}).state('main.shopCar',angularAMD.route({
	    	url:"/shopCar",
	    	templateUrl:'views/shopCar.html',
    		controllerUrl:"controller/shopCar.js"
	    }));
	    
	}]);
	return angularAMD.bootstrap(app);
});