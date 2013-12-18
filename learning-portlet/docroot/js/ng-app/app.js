/**
 * Constants
 * 
 */
angular.module('learningPortlet.config', []).constant('properties', {
    resourceUrl: LEARNING_PORTLET_SERVE_RESOURCE_URL
});

/**
 * Services - CategoryService
 * 
 */
angular.module('learningPortlet.services', ['ngResource', 'learningPortlet.config']).factory('CategoryService', ['$resource', 'properties', function ($resource, properties) {
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
 * Controllers - CategoryController
 * 
 */
angular.module('learningPortlet.controllers', ['learningPortlet.services']).controller('CategoryCtrl', [ '$scope', 'CategoryService', function ($scope, CategoryService) {
    $scope.categories = [];
    CategoryService.get({}, function(data) {
        $scope.categories = data.results;
    });
    /* listen to add category event and then refreshes the list */
    Liferay.on('learning:globalCategoryAdded', function(e) {
        console.info('[Event Intercepted] learning:globalCategoryAdded');
        console.info(e);
        $scope.$apply(function () {
            $scope.categories.push({name: e.categoryName});
        });
    });
}]);

/**
 * Application
 * 
 */
angular.module('learningPortlet', ['learningPortlet.controllers']);

// bootstraps app passing the application container defined in view.jsp and the module to be loaded
angular.bootstrap(document.getElementById('learning-portlet'), ['learningPortlet']);