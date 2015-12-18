/*
 * @name GameCtrl
 * @desc: Contains methods and members related to clendar
 *
 * The coding and best practices are heavily infulenced from 
 * JHON PAPA's excellent angular coding style guide
 * https://github.com/johnpapa/angular-styleguide
 */

// Wrap everything in an Immediately Invoked Function Expression (IIFE)
// As per JP's guide

(function () {

	'use strict';

	var setGameController = function ( ALLOWED_CELLS ) {

		var vm = this;
		
		vm.totalCells = _.parseInt(ALLOWED_CELLS * ALLOWED_CELLS);
		vm.totalPairs = Math.round( vm.totalCells/2) ;
		vm.matchedPairs = 0;
		vm.finishedSuccess = false;
		vm.finishedFailed = false;
	
	};

	angular
		.module('gameapp')

		.controller('GameCtrl', setGameController);
		
	setGameController.$inject = [ 'ALLOWED_CELLS' ];	

})();