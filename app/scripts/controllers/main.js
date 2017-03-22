'use strict';

/**
 * @ngdoc function
 * @name uiChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiChallengeApp
 */
angular.module('uiChallengeApp')
	.controller('MainCtrl', function (location, $scope) {
		this.getMyLocation = function() {
			location.get().then(function(response) {
				$scope.personL = response;
			});
		};

		this.resetMyLocation = function() {
			$scope.personL = '';
		};

		this.getHostLocation = function() {
			if ($scope.website !== undefined) {
				location.get($scope.website).then(function(response) {
					$scope.hostL = response;
				});
			}

			console.log($scope.hostL);
		};

		$scope.websitePattern = (function() {
			var regexp = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?(.[a-zA-Z]{2,6})?$/i;

			return {
				test: function(value) {
					return regexp.test(value);
				}
			};
		})();

		$scope.maps = {
			center: {
				lat: '37.772323',
				lon: '-122.214897'
			},
			zoom: 1,
			latitude: false,
			longitude: false
		};
	});
