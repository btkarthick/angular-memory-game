/*
 * Application entry file
 *
 * The coding and best practices are heavily infulenced from 
 * JHON PAPA's excellent angular coding style guide
 * https://github.com/johnpapa/angular-styleguide
 */

// Wrap everything in an Immediately Invoked Function Expression (IIFE)
// As per JP's guide

(function(){
	
	'use strict';
	
	
	
	/*Namming the app as gameapp */
	
	angular
			.module('gameapp', [])
			
			.constant('ALLOWED_CELLS', 6);
	
})();