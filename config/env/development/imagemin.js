/**
 * @config
 * @title Imagemin
 * @package gulp-imagemin imagemin-pngquant
 * @env development
 */

module.exports = {
	progressive: false,		// jpg
	optimizationLevel: 1, 	// png
	interlaced: false,		// gif
	svgoPlugins: [			// svg
		{ removeViewBox: false },				// don't remove the viewbox atribute from the SVG
		{ removeUseStrokeAndFill: false },		// don't remove Useless Strokes and Fills
		{ removeEmptyAttrs: false }				// don't remove Empty Attributes from the SVG
	],
};