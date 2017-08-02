/**
 * @title Sass
 * @task
 * @name styles:sass
 * @description sass preprocessing task, converts sass to css
 */

const Pump		= require('pump'),
 	GulpIf		= require('gulp-if'),
 	Concat		= require('gulp-concat'),
	Sass 		= require('gulp-sass'),
	SassVars	= require('gulp-sass-variables'),
	AutoPrefixer = require('gulp-autoprefixer'),
	Insert 		= require('gulp-insert'),
	CssBase64	= require('gulp-css-base64');

module.exports = {
	deps: ['images:raster', 'images:svg'/*, 'styles:imagehelper'*/],
	fn: function(Gulp, cb){

		const NODE_ENV 	= process.env.NODE_ENV;
		const DEV 		= NODE_ENV !== 'production';

		Pump([
			// pick up entry sass file
			Gulp.src(CONFIG.paths.source.styles.file),
			
			// output name regarding environment
			Concat(CONFIG.paths.build.styles[DEV ? 'filename' : 'filename_min']),

			// pass vars to sass
			SassVars(CONFIG.sass.vars(CONFIG, NODE_ENV)),

			// preprocess css with sass
			Sass(CONFIG.env[NODE_ENV].sass.settings)
				.on('error', Sass.logError),
			
			// add css3 prefixes
			GulpIf(CONFIG.env[NODE_ENV].autoprefixer,
				AutoPrefixer(CONFIG.env[NODE_ENV].autoprefixer)),
			
			// convert certain urls to base64 inline data
			GulpIf(CONFIG.env[NODE_ENV].cssbase64,
				CssBase64(Object.assign({},
					CONFIG.env[NODE_ENV].cssbase64,
					{ baseDir: CONFIG.paths.build.images.dir })
			)),
			
			// project info and license
			Insert.prepend('/*lol css*/\n'),
			
			// destination directory
			Gulp.dest(CONFIG.paths.build.styles.dir)
		], cb);
	}
};