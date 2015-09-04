var LoginController = function ($scope, $routeParams) {
    $scope.loginForm = {
        emailAddress: '',
        password: '',
        rememberMe: false,
        returnUrl: $routeParams.returnUrl
    };

    $scope.login2= function () {
        //todo
    }
}

LoginController.$inject = ['$scope', '$routeParams'];