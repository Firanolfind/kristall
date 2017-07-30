/**
 * @title Image Helper
 * @task
 * @name styles:imagehelper
 * @description creates sass helper configuration file with mixins, image properties and base64 source
 */

const Pump		= require('pump'),
	ImageHelper = require('gulp-compass-imagehelper');

module.exports = {
	deps: ['images:raster', 'images:svg'],
	fn: function(Gulp, cb){

		const NODE_ENV 	= process.env.NODE_ENV;

		Pump([
			Gulp.src([CONFIG.paths.source.images.files, CONFIG.paths.source.svg.files]),
			ImageHelper(Object.assign({},
				CONFIG.env[NODE_ENV].cssimagehelper, {
					images_path: CONFIG.paths.build.images.dir,
					images_path: CONFIG.paths.build.styles.dir }
			)),
			Gulp.dest(CONFIG.paths.source.styles.dir)
		], cb);
	}
};