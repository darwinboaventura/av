'use strict';

/**
 * @ngdoc overview
 * @name uiChallengeApp
 * @description
 * # uiChallengeApp
 *
 * Main module of the application.
 */
angular
	.module('uiChallengeApp', ['ngRoute', 'GoogleMapsNative'])
	.constant('API_LOCATION', 'http://ip-api.com/json/')
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.otherwise({
				redirectTo: '/'
			});
	});