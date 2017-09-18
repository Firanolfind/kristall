/**
 * Package module dependencies
 */

const Util = require('util');
const pick = require('lodash.pick');
const merge = require('lodash.merge');
const sortPackageJson = require('sort-package-json');


/**
 *
 * @param	{[type]} 	options 	[arguments options and defaults]
 * @return	{[type]}	jsonObject 	[json object to save package.json]
 */
const generatePackageJson = function(options){

	var packageJson = pick(require('../app/package.json'), 
		'main',
		'version',
		'description',
		'main',
		'scripts',
		'directories',
		'keywords',
		'devDependencies',
		'engines'
	);

	packageJson = sortPackageJson(merge(packageJson, {
		name: 					options.name,
		version: 				options.version,
		description: 			options.description,
		author: {
			"name": options.author,
			"url": `https://github.com/${options.author}`
		},
		license: 				options.license,
		repository: {
			"type": "git",
			"url": `git+https://github.com/${options.author}/${options.name}.git`
		},
	}));

	packageJson = Object.assign({
		title: 		options.title,
	}, packageJson);

	return packageJson;
}

module.exports = generatePackageJson;