/**
 * @title Watch Images
 * @task
 * @name images:watch
 * @description launches images watcher
 */

module.exports = {
	deps: [],
	fn: function(Gulp, cb){
		Gulp.watch(CONFIG.paths.source.images.files, 	['images:raster'] );
		Gulp.watch(CONFIG.paths.source.svg.files, 		['images:svg']	  );
	}
};