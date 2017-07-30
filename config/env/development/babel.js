/**
 * @config
 * @title Babel
 * @package babel babelify
 * @env development
 */

module.exports = {
	presets: ["es2015" ,"react"],
	plugins: [ "transform-object-rest-spread" ],
	extensions: ['.js', '.jsx', '.json'],
	sourceMapsAbsolute: false
};