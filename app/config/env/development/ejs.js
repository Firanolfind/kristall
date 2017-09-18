/**
 * @config
 * @title EJS
 * @package ejs gulp-ejs
 * @env development
 */

module.exports = { 
	options: {
		filename:		null,
		compileDebug: 	true,
		client: 		false,
		debug: 			false,
		strict: 		false,
		_with: 			true,
		localsName: 	'$var',
		rmWhitespace:	false,
		// context:		global,
		// root:			'/',
		// delimiter:		//
		// escape:		
	},
	settings: {
		ext: '.html'
	}
};