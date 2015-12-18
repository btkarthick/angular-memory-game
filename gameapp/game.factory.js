/*
 * @name GameFactory
 * @desc: Contains methods and members related to clendar
 *
 * The coding and best practices are heavily infulenced from 
 * JHON PAPA's excellent angular coding style guide
 * https://github.com/johnpapa/angular-styleguide
 */

// Wrap everything in an Immediately Invoked Function Expression (IIFE)
// As per JP's guide

(function(){
	
	'use strict';
	
	
	var setGameFactory = function( ALLOWED_CELLS, ICONSLIST ){
	
		var randArrBag = [], totalCells = _.parseInt(ALLOWED_CELLS * ALLOWED_CELLS);
	
	
		var setInitalArrayValue = function(ranum){
			
			randArrBag.push({ 'icon' : ICONSLIST[ranum], 'value' : ranum, 'isVisible' : false, 'isMatched' : false });
			randArrBag.push({ 'icon' : ICONSLIST[ranum], 'value' : ranum, 'isVisible' : false, 'isMatched' : false });
			
		};
		
		
		var setArrBagValues = function(){
		
			if( randArrBag.length <  totalCells)
			{
				var rand = _.random(1, 99);
				var isUnique = true;
				
				for(var i=0; i<randArrBag.length; i++) {
			
					if(randArrBag[i].value == rand) {
						
						isUnique = false;
						break;
					}
				}
				
				if(isUnique) { setInitalArrayValue(rand); };
							
				setArrBagValues();	
			}
			
			else return;			
			
		};
		
		
		

		return {
			
					getInitArray : setInitalArrayValue ,
					
					randNumBag : randArrBag,
					
					getCellsValue : setArrBagValues
			
			   }	
			
		
		
	};
	
		
	
	angular
			.module('gameapp')
			.factory('GameFactory', setGameFactory);
	
	setGameFactory.$inject = [ 'ALLOWED_CELLS', 'ICONSLIST' ];
	
})();