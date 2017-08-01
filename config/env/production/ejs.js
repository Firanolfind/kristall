/**
 * @config
 * @title EJS
 * @package ejs gulp-ejs
 * @env production
 */

module.exports = { 
	options: {
		filename:		null,
		compileDebug: 	false,
		client: 		false,
		debug: 			false,
		strict: 		false,
		_with: 			true,
		localsName: 	'$var',
		rmWhitespace:	true,
		// context:		global,
		// root:			'/',
		// delimiter:		//
		// escape:		
	},
	settings: {
		ext: '.html'
	}
};