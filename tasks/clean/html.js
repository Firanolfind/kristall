/**
 * @title Clean Client Scripts
 * @task
 * @name clean:client
 * @description removes client built scripts
 */

const Delete = require('del');

module.exports = {
	deps: [],
	fn: function(Gulp, cb){

		Delete(CONFIG.paths.build.server.html.files)
			.then(path=>{cb()});
	}
};