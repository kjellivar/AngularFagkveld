/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute'])
    .config(function ($routeProvider) {
        'use strict';

        $routeProvider.when('/', {
            controller: 'TodoCtrl',
            templateUrl: 'partials/view.html'
        })
        .when('/:status', {
            controller: 'TodoCtrl',
            templateUrl: 'partials/view.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });
