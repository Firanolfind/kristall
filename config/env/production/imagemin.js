/**
 * @config
 * @title Imagemin
 * @package gulp-imagemin imagemin-pngquant
 * @env production
 */

module.exports = {
	progressive: true,		// jpg
	optimizationLevel: 3, 	// png
	interlaced: true,		// gif
	svgoPlugins: [			// svg
		{ removeViewBox: false },				// don't remove the viewbox atribute from the SVG
		{ removeUseStrokeAndFill: false },		// don't remove Useless Strokes and Fills
		{ removeEmptyAttrs: false }				// don't remove Empty Attributes from the SVG
	],
};