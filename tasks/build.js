/**
 * @title Build Project
 * @task
 * @name build
 * @description builds full project regarding node environment
 */

const Pump	= require('pump');

module.exports = {
	deps: ['styles:sass', 'fonts', 'client', 'server:html'],
	fn: function(Gulp, cb){
		cb();
	}
};