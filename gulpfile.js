/*
 *  Gulp File
 */

'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
	reload      = browserSync.reload;		
	
/* 
 * 
 * Setting the desstination browsers for autoprefixer
 *
 */

var AUTOPREFIXER_BROWSERS = [
	
//
// Official browser support policy:
// http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
//
	'Chrome >= 35', // Exact version number here is kinda arbitrary
// Rather than using Autoprefixer's native "Firefox ESR" version specifier string,
// we deliberately hardcode the number. This is to avoid unwittingly severely breaking the previous ESR in the event that:
// (a) we happen to ship a new Bootstrap release soon after the release of a new ESR,
//     such that folks haven't yet had a reasonable amount of time to upgrade; and
// (b) the new ESR has unprefixed CSS properties/values whose absence would severely break webpages
//     (e.g. `box-sizing`, as opposed to `background: linear-gradient(...)`).
//     Since they've been unprefixed, Autoprefixer will stop prefixing them,
//     thus causing them to not work in the previous ESR (where the prefixes were required).
	'Firefox >= 31', // Current Firefox Extended Support Release (ESR)
// Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
// NOT the Edge app version shown in Edge's "About" screen.
// For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
// See also https://github.com/Fyrd/caniuse/issues/1928
	'Edge >= 12',
	'Explorer >= 9',
// Out of leniency, we prefix these 1 version further back than the official policy.
	'iOS >= 8',
	'Safari >= 8',
// The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
	'Android 2.3',
	'Android >= 4',
	'Opera >= 12'

];

var sassOptions = 	{    outputStyle: 'compact', // shall be expanded,nested,compressed
							precision: 8 // changing to 8, as RockFish's precision is 8
					};
					

var plumberErrorHandler = function(error){
		
		console.log(error.message);
		this.emit('end');
};

gulp.task('styles', function(){
	
	return gulp.src( 'sass_files/**/*.scss' )
				
		.pipe(plumber({ errorHandler : plumberErrorHandler}))
	
		.pipe(sourcemaps.init())
		
		.pipe(sass(sassOptions))
	
		.pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
		
		.pipe(sourcemaps.write('./'))
		
		.pipe(gulp.dest( './css' ))
		
		.pipe(browserSync.stream());
		
});


gulp.task('serve', ['styles'], function(){
	
	var syncOptions = { 
						  server: { baseDir: "./" },
						  
						  logPrefix: "MEM GAME",
						  
						  browser: ["google chrome", "firefox"],
						  
						  open : true,
						  
						  notify: false 
					  }
	
	browserSync.init( syncOptions );
	
	
	gulp.watch('sass_files/**/*.scss', ['styles']);
	
	gulp.watch("*.html").on("change", browserSync.reload);
});


gulp.task('default', ['styles', 'serve']);
	