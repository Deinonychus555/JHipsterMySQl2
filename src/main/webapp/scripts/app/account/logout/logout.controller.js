'use strict';

angular.module('jhipstermysqlApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
