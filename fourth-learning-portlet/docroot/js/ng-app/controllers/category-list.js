/**
 * CategoryListCtrl
 * 
 */
angular.module('fourthLearningPortlet.controllers.CategoryListCtrl', 
        ['fourthLearningPortlet.services.CategoryService',
         'fourthLearningPortlet.config',
         'ui.format']).controller('CategoryListCtrl', [ '$scope', '$filter', '$location', 'categories', 'properties', function ($scope, $filter, $location, categories, properties) {
    $scope.categories = categories.results;
    
    /* pagination scope values */
    $scope.totalItems = categories.total;
    $scope.currentPage = Math.ceil(categories.start / properties.pagination.SIZE) + 1;
    $scope.itemsPerPage = properties.pagination.SIZE;
    $scope.numPages = Math.ceil(categories.total / properties.pagination.SIZE);
    
    /* fix: to avoid on change location loop */
    var paginationClicked = false;
    
    $scope.$watch('currentPage', function() {
        if (paginationClicked) {
            var formatFilter = $filter('format');
            var start = ($scope.currentPage - 1) * properties.pagination.SIZE;
            var end = start + properties.pagination.SIZE;
            $location.path(formatFilter(properties.paths.PAGINATED, {start: start, end: end}));
        }
        paginationClicked = true;
    });

}]);