/**
 * @config
 * @title sass
 * @package sass gulp-sass
 * @env development
 */

const Path = require('path');

module.exports = {
	vars: (CONFIG, NODE_ENV) => {
		var rel = path =>  Path.posix.relative(CONFIG.paths.build.styles.dir, path)
		return {
			$_NODE_ENV:				NODE_ENV,
			$_PATH_IMG:				rel(CONFIG.paths.build.images.dir),
			$_PATH_FONT: 			rel(CONFIG.paths.build.fonts.dir),
			$_PATH_NODE_MODULES: 	rel('./node_modules')
		}
	}
};