var RegistrationFactory = function ($http, $q) {
    return function (emailAddress, password, confirmPassword) {

        var deferredObject = $q.defer();

        $http.post(
            '/Account/Register', {
                Email: emailAddress,
                Password: password,
                ConfirmPassword: confirmPassword
            }
        ).
        success(function (data) {
            if (data == "True") {
                console.log('Factory - success===true');
                deferredObject.resolve({ success: true });
            } else {
                console.log('Factory - success===false');
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            console.log('Factory - error');
            deferredObject.resolve({ success: false });
        });

        return deferredObject.promise;
    }
}

RegistrationFactory.$inject = ['$http', '$q'];