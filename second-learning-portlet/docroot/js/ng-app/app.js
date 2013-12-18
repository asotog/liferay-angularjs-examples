
angular.module('secondLearningPortlet.services', []);
angular.module('secondLearningPortlet.controllers', ['secondLearningPortlet.services']);
angular.module('secondLearningPortlet.config', []).constant('properties', {
    resourceUrl: SECOND_LEARNING_PORTLET_SERVE_RESOURCE_URL
});
angular.module('secondLearningPortlet', ['secondLearningPortlet.controllers']);

/**
 * Services - CategoryService
 * 
 */
angular.module('secondLearningPortlet.services', ['ngResource', 'secondLearningPortlet.config']).factory('CategoryService', ['$resource', 'properties', function ($resource, properties) {
    return $resource(properties.resourceUrl, {}, {
        add: {
            method:'POST', 
            params: {
                serve_resource_action: 'add'
            }
        }
    });
 }]);


/**
 * Controllers - CategoryController
 * 
 */
angular.module('secondLearningPortlet.controllers').controller('CategoryCtrl', [ '$scope', 'CategoryService', function ($scope, CategoryService) {
    $scope.addCategory = function() {
        CategoryService.add({category_name: $scope.categoryName}, function() {
            Liferay.fire('learning:globalCategoryAdded', {categoryName: $scope.categoryName});
        }); 
    };
}]);


angular.bootstrap(document.getElementById('second-learning-portlet'), ['secondLearningPortlet']);