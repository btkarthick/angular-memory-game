/*
 * Directive - related to cells
 *
 * The coding and best practices are heavily infulenced from 
 * JHON PAPA's excellent angular coding style guide
 * https://github.com/johnpapa/angular-styleguide
 */

// Wrap everything in an Immediately Invoked Function Expression (IIFE)
// As per JP's guide

(function () {

	'use strict';


	var cellsDirectiveController = function ($scope, GameFactory, ALLOWED_CELLS, $timeout) {

		var vm = this, timer, indices = [];
					
		vm.cells = [];
		vm.allowedCells = ALLOWED_CELLS;
			
		
		vm.setWidth = function () {

			return _.parseInt((80 * vm.allowedCells)) + 'px';
		};


		var resetCells = function () {
			
			for(var i=0; i < indices.length; i++) {
				
				vm.cells[indices[i]].isVisible = false;
				vm.cells[indices[i]].isMatched = false;
		}
			indices = [];
		};

		var setGameClosure = function () {

			if (indices[0] === indices[1]) {
				resetCells();
			}

			else {
				if (vm.cells[indices[0]].value === vm.cells[indices[1]].value) {
					
					vm.cells[indices[0]].isVisible = vm.cells[indices[1]].isVisible = true;
					
					vm.cells[indices[0]].isMatched = vm.cells[indices[1]].isMatched = true;
					
					indices = [];
						
					$scope.matched++;
					
					
					
					if($scope.totalpairs == $scope.matched)
					{ 
						$scope.success = true; 
					}
					
					console.log($scope.totalpairs + ' --- ' + $scope.matched + '---' + $scope.success);
				}

				else {

					$timeout(resetCells, 1000);
				}

			}

		};

		vm.setPlayGame = function (cindex) {

			if(vm.cells[cindex].isVisible || vm.cells[cindex].isMatched || indices.length >= 2)
			{ return false; }

			if (timer) $timeout.cancel(timer);

			indices.push(cindex);
			vm.cells[cindex].isVisible = true;

			switch (indices.length) {

				case 1:
					timer = $timeout(resetCells, 2000);
					break;

				case 2:
					setGameClosure();
					break;
			}

		};
		
		
		// Set the initial values for the random number array bag
		GameFactory.getInitArray(_.random(1, 99));
		// Set the remaining values into the array based on the cells count
		GameFactory.getCellsValue();
		// Shuffle the final array and assign it to the cells variable
		vm.cells = _.shuffle(GameFactory.randNumBag);

	};

	var setGameCellsDirective = function () {

		var linkFunc = function ($scope, element, attrs, $ctrl) {
			
		};


		return {
			restrict: 'E',
			scope: { totalpairs: '@', matched: '=', success : '=' },
			controllerAs: 'dirctrl',
			controller: cellsDirectiveController,
			link: linkFunc,
			templateUrl: 'tpl-game-cells.html'
			
			/*template: [
			'<div class="todo">',
			'<input type="text" data-ng-model="dirctrl.count">',
			'<button type="button" data-ng-click="dirctrl.decrement();">-</button>',
			'<button type="button" data-ng-click="dirctrl.increment();">+</button>',
			'</div>'
			].join('')*/

		};

		cellsDirectiveController.$inject = ['$scope', 'GameFactory', 'ALLOWED_CELLS', '$timeout'];
	};



	angular
		.module('gameapp')

		.directive('gameCells', setGameCellsDirective);

})();