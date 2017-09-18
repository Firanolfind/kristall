/**
 * @title Clean SVG
 * @task
 * @name clean:svg
 * @description removes built svg files
 */

const Delete = require('del');

module.exports = {
	deps: [],
	fn: function(Gulp, cb){
		Delete(CONFIG.paths.build.svg.files)
			.then(path=>{cb()});
	}
};