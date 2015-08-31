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
	});

});





//states are statistics, flashcard view, and new flashcard form