'use strict';

describe('Directive: help', function () {
	// load the directive's module
	beforeEach(module('uiChallengeApp'));

	var element, scope;

	beforeEach(inject(function ($rootScope) {
		scope = $rootScope.$new();
	}));

	it('should have the value of text as ?', inject(function ($compile) {
		element = '<button class="help">?</button>';

		element = $compile(element)(scope);

		expect(element.text()).toBe('?');
	}));
});
