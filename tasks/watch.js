/**
 * @title Watch
 * @task
 * @name watch
 * @description launches project watcher and server, watches project changes and recompiles it
 */
require('colors');

const Pump		= require('pump'),
	GUtil		= require('gulp-util');
/*
const Pump	= require('pump');

var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');*/

const clientTask = require('./client');

module.exports = {
	deps: [],
	fn: function(Gulp, cb){

		const cache = {};
		const packageCache = {};
		const b = clientTask.browserify(true, cache, packageCache);
		const bundle = clientTask.bundle.bind(this, Gulp, b);

		b.on('update', bundle);
		bundle();

		Gulp.watch(CONFIG.paths.source.images.files, 				['images:raster']	);
		Gulp.watch(CONFIG.paths.source.svg.files, 					['images:svg']		);
		Gulp.watch(CONFIG.paths.source.styles.files,				['styles:sass']		);
		Gulp.watch(CONFIG.paths.source.server.html.files,			['server:html']		);
	}
};