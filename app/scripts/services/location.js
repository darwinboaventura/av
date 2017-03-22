'use strict';

/**
 * @ngdoc service
 * @name uiChallengeApp.Location
 * @description
 * # Location
 * Service in the uiChallengeApp.
 */
angular.module('uiChallengeApp')
	.service('location', function ($http, API_LOCATION) {
		return {
			get: function(_host_) {
				var host;

				if (_host_ === undefined) {
					host = '';
				} else {
					host = _host_;
				}

				return $http.get(API_LOCATION + host).then(function(response) {
					return response.data;
				}, function(error) {
					return error;
				});
			}
		};
	});
