/**
 * @title Clean Images
 * @task
 * @name clean:images
 * @description removes built images
 */

const Delete = require('del');

module.exports = {
	deps: [],
	fn: function(Gulp, cb){
		Delete(CONFIG.paths.build.images.files)
			.then(path=>{cb()});
	}
};