/**
 * @title Watch Client
 * @task
 * @name client:watch
 * @description launches client watcher
 */

const client = require('./index');

module.exports = {
	deps: ['client'],
	fn: function(Gulp, cb){

		const cache = {};
		const packageCache = {};
		const b = client.browserify(true, cache, packageCache);
		const bundle = client.bundle.bind(this, Gulp, b);

		b.on('update', bundle);
		bundle();
	}
};