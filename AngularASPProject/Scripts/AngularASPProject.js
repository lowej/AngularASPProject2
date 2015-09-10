var AngularASPProject = angular.module('AngularASPProject', ['ui.router', 'ui.bootstrap']);

AngularASPProject.controller('LandingPageController', LandingPageController);
AngularASPProject.controller('LoginController', LoginController);
AngularASPProject.controller('RegisterController', RegisterController);
AngularASPProject.controller('CrazyController', CrazyController);

AngularASPProject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularASPProject.factory('CrazyFactory', CrazyFactory);
AngularASPProject.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $stateProvider
    .state('stateOne', {
        url: '/stateOne?donuts',
        views: {
            "containerOne": {
                templateUrl: '/routesDemo/one'
            },
            "containerTwo": {
                templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
            },
            "nestedView@stateOne": {
                templateUrl: '/routesDemo/four'
            }
        }
    })
    .state('stateTwo', {
        url: '/stateTwo',
        views: {
            "containerOne": {
                templateUrl: '/routesDemo/one'
            },
            "containerTwo": {
                templateUrl: '/routesDemo/three'
            }
        }
    })
    .state('stateThree', {
        url: '/stateThree?donuts',
        views: {
            "containerOne": {
                templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
            },
            "containerTwo": {
                templateUrl: '/routesDemo/three'
            }
        }
    })
    .state('loginRegister', {
        url: '/loginRegister?returnUrl',
        views: {
            "containerOne": {
                //Login view not working as i created it manually.  Created one called 'Crazy' instead which I am using
                templateUrl: '/Account/Crazy',
                controller: CrazyController
            },
            "containerTwo": {
                templateUrl: '/Account/Register',
                controller: RegisterController
            }
        }
    });

    //Do I need this line or not???
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];
//configFunction.$inject = ['$routeProvider', '$httpProvider'];
//configFunction.$inject = ['$routeProvider'];

AngularASPProject.config(configFunction);