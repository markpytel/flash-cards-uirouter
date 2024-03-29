var app = angular.module('flashCards', ['ui.router']);

app.value('currentFlashCards', []);

app.config(function ($stateProvider){
	$stateProvider.state('stats', {
		url: '/stats',
		templateUrl: '/views/statistics.html',
		controller: 'StatsController'
	}).state('flashcards', {
		url: '/flashcards',
		templateUrl: '/views/flashcards.html',
		controller: 'MainController'
	}).state('makecard', {
		url: '/makecard',
		templateUrl: '/views/makecard.html',
		controller: 'NewCardController'
	}).state('managecard', {
		url: '/managecard/:id',
		templateUrl: '/views/managecard.html',
		controller: 'EditCardController'
	}).state('managecard.edit', {
		url: '/edit',
		templateUrl: '/views/edit.html',
		controller: function($scope, $stateParams, $http){
			$http.get('/cards/'+$stateParams.id)
			.then(function(response){
				$scope.card = response.data;
				console.log($scope.card);
			})
		}
	}).state('managecard.delete', {
		url: '/delete',
		templateUrl: '/views/deletecard.html',
		controller: function($scope, $stateParams, $http){
			$http.delete('/cards/'+$stateParams.id)
			.then(function(){
				console.log("Card Deleted");
			})
		}

	})

});






//states are statistics, flashcard view, and new flashcard form