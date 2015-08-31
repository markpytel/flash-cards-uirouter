app.controller('EditCardController', function ($state, $scope, FlashCardsFactory) {
	$scope.categories = FlashCardsFactory.categories;
	$scope.saveCard = function (card) {
		FlashCardsFactory.updateCard(card)
		.then(function (updatedCard) {
			$scope.$parent.editing = false;
			$state.go('flashcards');
		});
	};
});