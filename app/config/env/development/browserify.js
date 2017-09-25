/**
 * @config
 * @title Browserify
 * @package browserify
 * @env development
 */

module.exports = { 
	debug: 				true,
	extensions: 		['.js', '.json', '.jsx'],
	detectGlobals:		false,
	insertGlobals: 		true,
	ignoreMissing:		false,
	standalone:			false,
	noParse: [],
	bundleExternal: 	true,
	detectGlobals:		true,
	insertGlobals:		false,
	ignoreMissing:		true,
	insertGlobalVars:	null,
	// externalRequireName: 'require'
};