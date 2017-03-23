'use strict';

describe('Controller MainCtrl', function() {
	beforeEach(module('uiChallengeApp'));

	var MainCtrl;
	var scope;
	var $httpBackend;
	var location;

	// inject root
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();

		MainCtrl = $controller('MainCtrl', {
	      $scope: scope
	    });
	}));

	// inject http, service
	beforeEach(inject(function($injector) {
		$httpBackend = $injector.get('$httpBackend');
		location = $injector.get('location');
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('function getMyLocation', function() {
		var myLocation = {
			as:'AS28573 CLARO S.A.',
			city:'São Paulo',
			country:'Brazil',
			countryCode:'BR',
			isp:'NET Virtua',
			lat:-23.5464,
			lon:-46.6289,
			org:'NET Virtua',
			query:'201.6.133.18',
			region:'SP',
			regionName:'Sao Paulo',
			status:'success',
			timezone:'America/Sao_Paulo',
			zip:''
		};

		it('should be defined', function() {
			expect(MainCtrl.getMyLocation).toBeDefined();
		});

		it('Should return a object with data of my location', function() {
			$httpBackend.expectGET('http://ip-api.com/json/').respond(myLocation);

			MainCtrl.getMyLocation();

			$httpBackend.flush();

			expect(scope.personL).toEqual(myLocation);
		});
	});

	describe('function resetMyLocation', function() {
		it('should be defined', function() {
			expect(MainCtrl.resetMyLocation).toBeDefined();
		});

		it('should reset the location to undefined', function() {
			MainCtrl.resetMyLocation();

			expect(scope.personL).toBe('');
		});
	});

	describe('function getHostLocation', function() {
		var hostLocation = {
			'as':'AS7162 Universo Online S.A.',
			'city':'São Paulo',
			'country':'Brazil',
			'countryCode':'BR',
			'isp':'Universo Online S.A.',
			'lat':-23.5701,
			'lon':-46.6915,
			'org':'Universo Online S.A.',
			'query':'200.147.67.142',
			'region':'SP',
			'regionName':'Sao Paulo',
			'status':'success',
			'timezone':'America/Sao_Paulo',
			'zip':''
		};

		it('should be defined', function() {
			expect(MainCtrl.getHostLocation).toBeDefined();
		});

		it('Should return a object with data of uol location', function() {
			$httpBackend.expectGET('http://ip-api.com/json/www.uol.com.br').respond(hostLocation);

			scope.website = 'www.uol.com.br';

			MainCtrl.getHostLocation();

			$httpBackend.flush();

			expect(scope.hostL).toEqual(hostLocation);
		});

		it('Should return undefined', function() {
			scope.website = '';

			MainCtrl.getHostLocation();

			expect(scope.hostL).toBe(undefined);
		});
	});
});
