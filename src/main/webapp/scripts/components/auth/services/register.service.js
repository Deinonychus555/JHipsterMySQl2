'use strict';

angular.module('jhipstermysqlApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


