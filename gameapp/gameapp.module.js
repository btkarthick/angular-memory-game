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
			
			.constant('ALLOWED_CELLS', 6)
			
			.constant('ICONSLIST', ["fa-check-square", "fa-trophy", "fa-umbrella", "fa-hand-paper-o", "fa-hand-scissors-o", "fa-toggle-on", "fa-signal", "fa-shopping-basket", "fa-shopping-cart", "fa-shield", "fa-paper-plane", "fa-bars", "fa-question-circle", "fa-question", "fa-power-off", "fa-sitemap", "fa-star", "fa-star-half-o", "fa-street-view", "fa-smile-o", "fa-thumb-tack", "fa-thumbs-up", "fa-tree", "fa-television", "fa-unlock-alt", "fa-wheelchair", "fa-wifi", "fa-truck", "fa-upload", "fa-volume-off", "fa-print", "fa-puzzle-piece", "fa-random", "fa-recycle", "fa-registered", "fa-reply-all", "fa-retweet", "fa-rocket", "fa-rss", "fa-search-minus", "fa-search-plus", "fa-send-o", "fa-server", "fa-ship", "fa-sitemap", "fa-sliders", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-sun-o", "fa-support", "fa-tablet", "fa-tachometer", "fa-tag", "fa-taxi", "fa-terminal", "fa-thumb-tack", "fa-times", "fa-trash", "fa-university", "fa-user", "fa-user-secret", "fa-users", "fa-video-camera", "fa-volume-down", "fa-warning", "fa-wrench", "fa-hand-lizard-o", "fa-hand-rock-o", "fa-hand-peace-o", "fa-hand-o-up", "fa-hand-spock-o", "fa-train", "fa-subway", "fa-motorcycle", "fa-bus", "fa-bicycle", "fa-automobile", "fa-thumbs-down", "fa-soccer-ball-o", "fa-qrcode", "fa-genderless", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mercury", "fa-neuter", "fa-transgender", "fa-venus", "fa-file-picture-o", "fa-venus-mars", "fa-file-pdf-o", "fa-file-text", "fa-file-word-o", "fa-file-zip-o", "fa-file-excel-o", "fa-google-wallet", "fa-cc-mastercard", "fa-area-chart", "fa-pie-chart"]);
	
})();