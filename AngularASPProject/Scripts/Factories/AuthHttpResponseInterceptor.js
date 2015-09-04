var AuthHttpResponseInterceptor = function ($q, $location) {

    console.log("I'm here in the interceptor");

    return {
        response: function (response) {
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                console.log("Response Error 401", rejection);
                //login view not working as I created manually.  using crazy as the name instead
                $location.path('/crazy').search('returnUrl', $location.path());
            }
            return $q.reject(rejection);
        }
    }
}

AuthHttpResponseInterceptor.$inject = ['$q', '$location'];