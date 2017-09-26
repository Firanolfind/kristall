/**
 * @title Watch Fonts
 * @task
 * @name fonts:watch
 * @description launches fonts watcher
 */

module.exports = {
	deps: ['fonts'],
	fn: function(Gulp, cb){
		Gulp.watch(CONFIG.paths.source.fonts.files,	['fonts'] );
	}
};