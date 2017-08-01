/**
 * @title Clean Temporary Data
 * @task
 * @name clean:tmp
 * @description removes temp files
 */

const Delete = require('del');

module.exports = {
	deps: [],
	fn: function(Gulp, cb){
		Delete(CONFIG.paths.build.tmp.files)
			.then(path=>{cb()});
	}
};