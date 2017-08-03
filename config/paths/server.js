/**
 * @config
 * @title Server path configs including public url
 * @target server
 */

module.exports = {
	public: {
		dir: 	'./build/',
		files: 	'./build/**/*.**',
	},
	url: {
		static: '/public/'
	}
};