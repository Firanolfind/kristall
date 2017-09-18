/**
 * @config
 * @title sass
 * @package sass gulp-sass
 * @env development
 */

const Path = require('path');

module.exports = {
	vars: (CONFIG, NODE_ENV) => {
		var rel = (path, rel = CONFIG.paths.build.styles.dir) => 
			Path.posix.relative(rel, path);

		return {
			$_NODE_ENV:				NODE_ENV,
			$_PATH_IMG:				rel(CONFIG.paths.build.images.dir),
			$_PATH_FONT: 			rel(CONFIG.paths.build.fonts.dir),
			$_PATH_NODE_MODULES: 	rel('./node_modules', CONFIG.paths.source.styles.dir)
		}
	}
};