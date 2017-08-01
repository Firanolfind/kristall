/**
 * @title Server HTML
 * @task
 * @name server:html
 * @description compiles html from template
 */

const Path 	= require('path'),
	Pump	= require('pump'),
	GUtil	= require('gulp-util'),
	EJs		= require('gulp-ejs');

module.exports = {
	deps: ['clean:html'],
	fn: function(Gulp, cb){

		const NODE_ENV 		= process.env.NODE_ENV;
		const DEV 			= NODE_ENV !== 'production';

		// resolve public path function
		const publicPath	= path => Path.posix.join('/', 
										Path.posix.relative(
											CONFIG.paths.build['*'].dir, path));

		Pump([
			Gulp.src(CONFIG.paths.source.server.html.files),

			// process esj template to html
			EJs({
					NODE_ENV: 	NODE_ENV,
					DEV: 		DEV,
					CONFIG: 	CONFIG,
					PUBLIC_PATH: publicPath
				}, 
				CONFIG.env[NODE_ENV].ejs.options,
				CONFIG.env[NODE_ENV].ejs.settings)
					.on('error', GUtil.log),

			Gulp.dest(CONFIG.paths.build.server.dir)
		], cb);
	}
};