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

		const NODE_ENV = process.env.NODE_ENV;
		const DEV = NODE_ENV !== 'production';

		Delete(CONFIG.paths.build.client[DEV ? 'file' : 'file_min'])
			.then(path=>{cb()});
	}
};