/**
 * @title Watch Styles
 * @task
 * @name styles:watch
 * @description launches style watcher
 */

module.exports = {
	deps: ['styles:imagehelper', 'styles:sass'],
	fn: function(Gulp, cb){
		Gulp.watch(CONFIG.paths.source.styles.files,	['styles:sass'] );
	}
};