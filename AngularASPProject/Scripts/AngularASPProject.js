var AngularASPProject = angular.module('AngularASPProject', ['ngRoute']);

AngularASPProject.controller('LandingPageController', LandingPageController);
AngularASPProject.controller('LoginController', LoginController);
AngularASPProject.controller('RegisterController', RegisterController);
AngularASPProject.controller('CrazyController', CrazyController);

AngularASPProject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularASPProject.factory('CrazyFactory', CrazyFactory);
AngularASPProject.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login?returnUrl', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        })
        .when('/crazy', {
            templateUrl: '/Account/Crazy',
            controller: CrazyController
        });

    //Do I need this line or not???
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];
//configFunction.$inject = ['$routeProvider'];

AngularASPProject.config(configFunction);