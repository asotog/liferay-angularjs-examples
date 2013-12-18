/**
 * Application
 * 
 */
angular.module('thirdLearningPortlet',
        ['ngRoute',
         'thirdLearningPortlet.config',
         'thirdLearningPortlet.controllers.CategoryCtrl',
         'thirdLearningPortlet.controllers.RouteListenerCtrl']).config(['$routeProvider', 'properties', function ($routeProvider, properties) {
        $routeProvider.when('/', {
            controller: 'CategoryCtrl',
            template: '<strong>{{queryType}}</strong>',
            resolve: {
                /* simple param passed to control to make it know what url type is being triggered */
                queryType: function() {
                    return 'all';
                }
            }
        })
        .when(properties.paths.PAGINATED, {
            controller: 'CategoryCtrl',
            template: '<strong>{{queryType}}</strong>',
            resolve: {
                queryType: function() {
                    return 'paginated';
                }
            }
        }).otherwise( {
            controller: 'CategoryCtrl',
            template: '<strong>{{queryType}}</strong>',
            resolve: {
                /* simple param passed to control to make it know what url type is being triggered */
                queryType: function() {
                    return 'all';
                }
            }
        });
    }
]);

/**
 * Constants
 * 
 */
angular.module('thirdLearningPortlet.config', []).constant('properties', {
    resourceUrl: THIRD_LEARNING_PORTLET_SERVE_RESOURCE_URL,
    paths: {
        PAGINATED: '/results/start/:start/end/:end/'
    }
});

/**
 * Services - CategoryService
 * 
 */
angular.module('thirdLearningPortlet.services.CategoryService', ['ngResource', 'thirdLearningPortlet.config']).factory('CategoryService', ['$resource', 'properties', function ($resource, properties) {
    return $resource(properties.resourceUrl, {}, {
        query: {
            method: 'GET',
            isArray: false,
            params: {
                serve_resource_action: 'list'
            }
        }
    });
 }]);

/**
 * Controllers - CategoryCtrl
 * 
 */
angular.module('thirdLearningPortlet.controllers.CategoryCtrl', ['ngRoute', 'thirdLearningPortlet.services.CategoryService']).controller('CategoryCtrl', [ '$scope', '$rootScope', '$routeParams', 'CategoryService', 'queryType', function ($scope, $rootScope, $routeParams, CategoryService, queryType) {
    console.info($routeParams);
    console.info(queryType);
    $scope.queryType = queryType;
}]);

/**
 * Controllers - RouteListenerCtrl
 * 
 */
angular.module('thirdLearningPortlet.controllers.RouteListenerCtrl', ['ngRoute']).controller('RouteListenerCtrl', [ '$scope', '$rootScope', '$routeParams', function ($scope, $rootScope, $routeParams) {
    $scope.data = '';
    $rootScope.$on('$routeChangeSuccess', function(e, current, previous) {
        console.info('route was changed');
        console.info(current.params);
        $scope.data = current.params;
    });
}]);

/**
 * Bootstrap Application
 * 
 */
angular.bootstrap(document.getElementById('third-learning-portlet'), ['thirdLearningPortlet']);