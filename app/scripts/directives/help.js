'use strict';

/**
 * @ngdoc directive
 * @name uiChallengeApp.directive:help
 * @description
 * # help
 */
angular.module('uiChallengeApp')
	.directive('help', function () {
		return {
			restrict: 'C',
			link: function postLink(scope, element) {
				element.click(function() {
					var fieldName = element.parents('tr').children('.field_name').text();
					var isp = element.parents('table').data('isp');
					var now = new Date();

					window.alert('This is your ' + fieldName.trim() + ' from ISP ' + isp + ' at ' + now);
				});
			}
		};
	});