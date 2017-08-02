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
			$NODE_ENV:	NODE_ENV,
			$PATH_IMG:	rel(CONFIG.paths.build.images.dir),
			$PATH_FONT: rel(CONFIG.paths.build.fonts.dir)
		}
	}
};