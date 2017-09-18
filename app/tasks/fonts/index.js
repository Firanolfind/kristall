/**
 * @title Fonts
 * @task
 * @name fonts
 * @description move selected webfonts to assets
 */

const Pump	= require('pump')

module.exports = {
	deps: ['clean:fonts'],
	fn: function(Gulp, cb){

		//@TODO
		// get selected fonts by name
		Pump([
			Gulp.src(CONFIG.paths.source.fonts.files),
			Gulp.dest(CONFIG.paths.build.fonts.dir)
		], cb);
	}
};