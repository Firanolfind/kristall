/**
 * @config
 * @title Browserify
 * @package browserify
 * @env development
 */

module.exports = { 
	debug: true,
	extensions: 		['.js', '.json', '.jsx'],
	bundleExternal: 	true,
	detectGlobals:		true,
	insertGlobals:		false,
	ignoreMissing:		true,
	insertGlobalVars:	null,
	// externalRequireName: 'require'
};