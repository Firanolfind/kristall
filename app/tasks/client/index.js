/**
 * @title Build Client Scripts
 * @task
 * @name client
 * @description creates javascript bundle from es6 modules, minifies output depending on environment mode
 */
require('colors');

const Pump		= require('pump'),
	Path		= require('path'),
	GUtil		= require('gulp-util'),
	GulpIf		= require('gulp-if'),
 	Browserify	= require('browserify'),
 	PathModify	= require('pathmodify'),
 	Watchify	= require('watchify'),
 	Babel		= require('babelify'),
 	Header		= require('gulp-header'),
 	Source		= require('vinyl-source-stream'),
 	Buffer		= require('vinyl-buffer'),
 	Babili		= require('gulp-babili'),
 	Uglify		= require('gulp-uglify');

const Task = module.exports = {
	deps: ['clean:client'],

	browserify: function(watch, cache, packageCache){
		const NODE_ENV 	= process.env.NODE_ENV;
		const DEV 		= NODE_ENV !== 'production';

		const clientPath = Path.posix.join(
			process.cwd(), 
			CONFIG.paths.source.client.dir
		);

		// browserify instanse
		const b = Browserify(CONFIG.paths.source.client.file,
				Object.assign({}, CONFIG.env[NODE_ENV].browserify, {
					// basedir: 		clientPath,
					cache: 			cache,
					packageCache: 	packageCache,
				})
			);

		b.plugin(PathModify, {mods: [
			function (rec) {
				var alias = {};
				var prefix = '/';
				if (rec.id.indexOf(prefix) === 0) {
					alias.id = Path.posix.join(
						clientPath, 
						rec.id.substr(prefix.length)
					);
				}
				return alias;
			}
		]})

		// watchify plugin
		if(watch)
			b.plugin(Watchify, CONFIG.env[NODE_ENV].watchify);

		// babelify transform
		b.transform(Babel.configure(CONFIG.env[NODE_ENV].babel));

		b.on('error', GUtil.log.bind(GUtil, 'Browserify Error'.red, '\n'))

		return b;
	},

	bundle: function(Gulp, b, cb){

		const NODE_ENV 	= process.env.NODE_ENV;
		const DEV 		= NODE_ENV !== 'production';

		var end, time;
		var start = new Date().getTime();

		return Pump([
			// bundle browserify
			b.bundle()
				.on('error', function(err){
					GUtil.log('Browserify Error'.red, '\n', err.message)
					this.emit('end');
				}),

			// convert to vinyl buffer stream, add filename
			Source(CONFIG.paths.build.client[DEV ? 'filename' : 'filename_min']),
			Buffer(),

			// pass through uglify
			GulpIf(CONFIG.env[NODE_ENV].uglify,
				Uglify(CONFIG.env[NODE_ENV].uglify)),

			// pass through babelify
			GulpIf(CONFIG.env[NODE_ENV].babili,
				Babili(CONFIG.env[NODE_ENV].babili)),

			// set destination of built script
			Gulp.dest(CONFIG.paths.build.client.dir)

		], function(){

			end = new Date().getTime();
					time = end - start;
			GUtil.log('browserify'.blue, 'rebundle took', (time + ' ms').magenta);

			cb && typeof cb === 'function' && cb();
		});
	},

	fn: function(Gulp, cb){
		
		var b = Task.browserify()

		Task.bundle(Gulp, b, cb);
	}
};