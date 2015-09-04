var CrazyController = function ($scope, $routeParams, $location, CrazyFactory) {
    $scope.crazyForm = {
        emailAddress: '',
        password: '',
        rememberMe: false,
        returnUrl: $routeParams.returnUrl,
        loginFailure: false
    };

    $scope.crazy = function () {
        var result = CrazyFactory($scope.crazyForm.emailAddress, $scope.crazyForm.password, $scope.crazyForm.rememberMe);
        result.then(function (result) {
            if (result.success) {
                if ($scope.crazyForm.returnUrl !== undefined) {
                    $location.path('/routeOne');
                } else {
                    $location.path($scope.crazyForm.returnUrl);
                }
            } else {
                $scope.crazyForm.loginFailure = true;
            }
        });
    }
}

CrazyController.$inject = ['$scope', '$routeParams', '$location', 'CrazyFactory'];