/**
 *  CategoryService
 * 
 */
angular.module('fourthLearningPortlet.services.CategoryService', ['ngResource', 'fourthLearningPortlet.config']).factory('CategoryService', ['$resource', 'properties', function ($resource, properties) {
    return $resource(properties.resourceUrl, {}, {
        query: {
            method: 'GET',
            isArray: false,
            params: {
                serve_resource_action: 'list' /* action type identifier, in that way liferay serveResource can filter it and know what is going to do, because serveResource is not only for ajax can be used to serve files, etc... */
            }
        }
    });
 }]);