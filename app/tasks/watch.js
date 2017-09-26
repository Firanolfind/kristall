/**
 * @title Watch
 * @task
 * @name watch
 * @description launches project watcher and server, watches project changes and recompiles it
 */

const Pump		= require('pump'),
	GUtil		= require('gulp-util');

const client = require('./client');

module.exports = {
	deps: ['client:watch', 'styles:watch', 'images:watch', 'fonts:watch', 'server:watch'],
	fn: function(Gulp, cb){
		cb();
	}
};