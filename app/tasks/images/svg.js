/**
 * @title Minify SVG Images
 * @task
 * @name images:raster
 * @description compress and move images to build assets
 */

const Pump		= require('pump'),
	Newer 		= require('gulp-newer'),
	ImageMin 	= require('gulp-imagemin');

module.exports = {
	deps: ['clean:svg'],
	fn: function(Gulp, cb){

		const NODE_ENV 	= process.env.NODE_ENV;

		Pump([
			Gulp.src(CONFIG.paths.source.svg.files),
			
			// task optimisation, check if files has changed
			Newer(CONFIG.paths.build.svg.dir),
			
			// minify svg images
			ImageMin(CONFIG.env[NODE_ENV].imagemin),
			Gulp.dest(CONFIG.paths.build.images.dir)
		], cb);
	}
};