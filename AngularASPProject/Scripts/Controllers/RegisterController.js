var RegisterController = function ($scope, $location, RegistrationFactory) {
    $scope.registerForm = {
        emailAddress: '',
        password: '',
        confirmPassword: '',
        registrationFailure: false
    };

    $scope.register = function () {
        var result = RegistrationFactory($scope.registerForm.emailAddress, $scope.registerForm.password, $scope.registerForm.confirmPassword);

        console.log('In registration controller');
        result.then(function (result) {
            if (result.success) {
                console.log('Success Registration');
                $location.path('/routeOne');
            } else {
                console.log('Failure Registration');
                $scope.registerForm.registrationFailure = true;
            }
        });
    }
}

RegisterController.$inject = ['$scope', '$location', 'RegistrationFactory'];