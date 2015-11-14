 'use strict';

angular.module('jhipstermysqlApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipstermysqlApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipstermysqlApp-params')});
                }
                return response;
            },
        };
    });