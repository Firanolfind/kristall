/**
 * @title Build Project
 * @task
 * @name build
 * @description builds full project regarding node environment
 */

const Pump	= require('pump');

module.exports = {
	deps: ['styles:imagehelper', 'fonts', 'client', 'server:html', 'styles:sass'],
	fn: function(Gulp, cb){
		cb();
	}
};