/**
 * @title Clean Fonts
 * @task
 * @name clean:fonts
 * @description removes built font files
 */

const Delete = require('del');

module.exports = {
	deps: [],
	fn: function(Gulp, cb){
		Delete(CONFIG.paths.build.fonts.dir)
			.then(path=>{cb()});
	}
};