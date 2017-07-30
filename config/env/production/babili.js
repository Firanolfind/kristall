/**
 * @config
 * @title Babili
 * @package babili
 * @env production
 */

module.exports = {
	mangle: {
		topLevel: true,
		except : [],
		eval : false,
		sort : true,
		screw_ie8 : true,
		keep_fnames : false
	},
	deadcode: true,
	removeConsole: true,
};