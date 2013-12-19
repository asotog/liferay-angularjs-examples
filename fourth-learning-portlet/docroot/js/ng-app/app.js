/**
 * Application
 * 
 */
angular.module('fourthLearningPortlet',
        ['ngRoute',
         'fourthLearningPortlet.config',
         'fourthLearningPortlet.controllers.CategoryListCtrl',
         'fourthLearningPortlet.services.CategoryService',
         'ui.bootstrap']).config(['$routeProvider', 'properties', function ($routeProvider, properties) {
        $routeProvider.when('/', {
            controller: 'CategoryListCtrl',
            templateUrl: properties.views.CATEGORY_LIST,
            resolve: {
                categories: ['CategoryService', function(CategoryService) {
                    var data = CategoryService.query({start: 0, end: properties.pagination.SIZE});
                    return data.$promise;
                }]
            }
        })
        .when(properties.paths.PAGINATED, {
            controller: 'CategoryListCtrl',
            templateUrl: properties.views.CATEGORY_LIST,
            resolve: {
                categories: ['CategoryService', '$route', function(CategoryService, $route) {
                    var data = CategoryService.query({start: $route.current.params.start, end: $route.current.params.end});
                    return data.$promise;
                }]
            }
        }).otherwise({
            controller: 'CategoryListCtrl',
            templateUrl: properties.views.CATEGORY_LIST,
            resolve: {
                categories: ['CategoryService', function(CategoryService) {
                    var data = CategoryService.query({start: 0, end: properties.pagination.SIZE});
                    return data.$promise;
                }]
            }
        });
    }
]);

/**
 * Constants
 * 
 */
angular.module('fourthLearningPortlet.config', []).constant('properties', {
    /* service url */
    resourceUrl: FOURTH_LEARNING_PORTLET_SERVE_RESOURCE_URL,
    /* pagination config */
    pagination: {
        SIZE: 4
    },
    /* routes paths */
    paths: {
        PAGINATED: '/categories/start/:start/end/:end/'
    },
    /* routes views */
    views: {
        CATEGORY_LIST: '/fourth-learning-portlet/js/ng-app/views/category-list.html'
    }
});