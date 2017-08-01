/**
 * @title Clean Styles
 * @task
 * @name clean:styles
 * @description removes built stylesheets
 */

const Delete = require('del');

module.exports = {
	deps: [],
	fn: function(Gulp, cb){

		const NODE_ENV = process.env.NODE_ENV;
		const DEV = NODE_ENV !== 'production';

		Delete(CONFIG.paths.build.styles[DEV ? 'file' : 'file_min'])
			.then(path=>{cb()});
	}
};