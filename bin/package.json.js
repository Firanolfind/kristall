/**
 * Package module dependencies
 */

const Util = require('util');
const defaults = require('lodash.defaults')
const pick = require('lodash.pick')


/**
 *
 * @param	{[type]} 	options 	[description]
 * @param	{[type]} 	packageJson [description]
 * @return	{[type]}	jsonObject 	[description]
 */
	



	// return FS.writeFile(config.path.build.manifest.file, JSON.stringify(config.manifest, null, "\n\n"), event);

/**
 *
 * @param	{[type]} 	options 	[description]
 * @param	{[type]} 	packageJson [description]
 * @return	{[type]}	jsonObject 	[description]
 */
const generatePackageJson = function(options){

	const packageJson = pick(require('../package.json'), 
			'main',
			'scripts',
			'directories',
			'keywords',
			'devDependencies',
			'dependencies',
			'engines'
		);

	// console.log(packageJson);

	if(!options.title && options.name)
		options.title = options.name.charAt(0).toUpperCase() + options.name.slice(1)

	return defaults(packageJson, {
		title: 					options.title,
		name: 					options.name,
		version: 				options.version,
		description: 			options.description,
		author: {
			"name": options.username,
			"url": `https://github.com/${options.username}`
		},
		license:				options.license ? options.license : "",
		repository: {
			"type": "git",
			"url": `git+https://github.com/${options.username}/${options.name}.git`
		},
	});
}


module.exports = generatePackageJson;