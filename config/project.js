/**
 * @config
 * @title Project
 */

module.exports = (()=>{

	const package = require('../package.json');

	return {
		title: 			package.title,
		name: 			package.name,
		version: 		package.version,
		description: 	package.description,
		author: 		package.author,
		license: 		package.license,
		repository: 	package.repository,
		homepage: 		package.homepage,
		keywords: 		package.keywords,
		directories: 	package.directories,
		scripts: 		package.scripts,
		main: 			package.main,
		engines: 		package.engines
	};
})();