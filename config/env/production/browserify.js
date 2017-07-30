/**
 * @config
 * @title Browserify
 * @package browserify
 * @env production
 */

module.exports = {
	debug: 				false,
	extensions: 		['.js', '.json', '.jsx'],
	bundleExternal: 	true,
	detectGlobals:		true,
	insertGlobals:		false,
	ignoreMissing:		true,
	insertGlobalVars:	null,
	// externalRequireName: 'require'
};