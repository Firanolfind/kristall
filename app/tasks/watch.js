/**
 * @title Watch
 * @task
 * @name watch
 * @description launches project watcher and server, watches project changes and recompiles it
 */
require('colors');

const Pump		= require('pump'),
	GUtil		= require('gulp-util');

const client = require('./client');

module.exports = {
	deps: ['images:raster', 'images:svg', 'styles:imagehelper', 'styles:sass', 'server:html', 'server:start'],
	fn: function(Gulp, cb){

		const cache = {};
		const packageCache = {};
		const b = client.browserify(true, cache, packageCache);
		const bundle = client.bundle.bind(this, Gulp, b);

		b.on('update', bundle);
		bundle();

		Gulp.watch(CONFIG.paths.source.images.files, 				['images:raster']	);
		Gulp.watch(CONFIG.paths.source.svg.files, 					['images:svg']		);
		Gulp.watch(CONFIG.paths.source.styles.files,				['styles:sass']		);
		Gulp.watch(CONFIG.paths.source.server.html.files,			['server:html']		);
	}
};