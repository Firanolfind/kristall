/**
 * @title Watch
 * @task
 * @name server:watch
 * @description launches server and server watcher
   		watcher restarts server when server.js and related 
   		config files modified
 */

module.exports = {
	deps: ['server:html', 'server:start'],
	fn: function(Gulp, cb){

		const NODE_ENV 	= process.env.NODE_ENV;
		const DEV 		= NODE_ENV !== 'production';

		Gulp.watch(CONFIG.paths.source.server.files,				['server:html'] );
		Gulp.watch([
			CONFIG.paths.server.startup.script,
			`./config/env/${NODE_ENV}/server.js`,
			'./config/env/path/server.js',
			'./config/env/path/build.js'
		],															['server:start'] );
	}
};