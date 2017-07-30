/**
 * @title Minify Raster Images
 * @task
 * @name images:raster
 * @description compress and move images to build assets
 */

const Pump		= require('pump'),
	Newer 		= require('gulp-newer'),
	ImageMin 	= require('gulp-imagemin'),
	PNGQuant 	= require('imagemin-pngquant');

module.exports = {
	deps: ['clean:images'],
	fn: function(Gulp, cb){

		const NODE_ENV 	= process.env.NODE_ENV;

		Pump([
			Gulp.src(CONFIG.paths.source.images.files),
			
			// task optimisation, check if files has changed
			Newer(CONFIG.paths.build.fonts.dir),

			// minify raster images, use pngquant plugin for png files
			ImageMin(Object.assign({},
				CONFIG.env[NODE_ENV].imagemin,
				{ use: [PNGQuant()] }
			)),
			Gulp.dest(CONFIG.paths.build.images.dir)
		], cb);
	}
};