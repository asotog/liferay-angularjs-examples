# Samples of using Angular JS in Liferay

All of the examples above are bootrapped manually with `angular.bootstrap(... , ...)` method

#### Learning Portlet

Uses `$resource` to retrieve all the liferay categories via ajax from the controller, also is using portlet `serveResource` method to  call the liferay api and process the json response. Also uses the angular `$scope.$apply` method to refresh the scope when integrating global events in js using ootb `Liferay.on(..., ...)`

#### Second Learning Portlet

Is a simple form with validation, to add a category, also triggers a portlet ajax call using `$resource` and fires a liferay javascript global event with `Liferay.fire(..., ...)` so if Learning Portlet is in the same page, it will listen when a category has been added and will refresh the list displayed with the new category added.

#### Third Learning Portlet

Sets routes, simple resolvers that will be passed to the controller, listens route changes

#### Fourth Learning Portlet

Using bootstrap angular-ui to generate pagination, retrieves categories from liferay and lists them inside of table, pagination links redirects to configured routes, so the link can be pasted again in the browser and will show the specific page in the table with respective results, also uses resolver in the routes configuration to load the table data before controller is proccessed.

Also this example is folder structured by module types, will see a folder structure like:

```
fourth-learning-portlet
|---- docroot
    |---- js
        |---- ng-app
            |---- controllers
                |---- category-list.js
            |---- services
                |---- category.js
            |---- views
                |---- category-list.html
            |---- app.js
            |---- bootstrap.js
```

