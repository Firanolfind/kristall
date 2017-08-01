/**
 * @config
 * @title autoprefixer
 * @package gulp-autoprefixer
 * @env production
 */

module.exports = {
	browsers: [
		"> 1%",
		"last 10 versions",
		"Firefox ESR", "Opera 12.1"
	],
	cascade: false
};