describe('Controller MainCtrl', function() {
	beforeEach(module('uiChallengeAppApp'));

	var $scope = null;
	var $httpBackend = null;
	var location = null;

	// inject root
	beforeEach(inject(function($controller, $rootScope) {
		$scope = $rootScope.$new();

		$controller('CommentController', {$scope: $scope});
	}));

	// inject http, service
	beforeEach(inject(function(_$httpBackend_, _location_) {
		$httpBackend = _$httpBackend_;
		location = _location_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('function getMyLocation', function() {
		var myLocation = {
			"as":"AS28573 CLARO S.A.",
			"city":"São Paulo",
			"country":"Brazil",
			"countryCode":"BR",
			"isp":"NET Virtua",
			"lat":-23.5464,
			"lon":-46.6289,
			"org":"NET Virtua",
			"query":"201.6.133.18",
			"region":"SP",
			"regionName":"Sao Paulo",
			"status":"success",
			"timezone":"America/Sao_Paulo",
			"zip":""
		};

		it('Should return a object with data of my location', function() {
			$httpBackend.expectGET('http://ip-api.com/json/').respond(myLocation);

			$scope.getMyLocation();

			$httpBackend.flush();

			expect($scope.personL).toBe(myLocation);
		});
	});

	describe('function resetMyLocation', function() {
		$scope.resetMyLocation();

		expect($scope.personL).toBe(undefined);
	});

	describe('function getHostLocation', function() {

	});
});
