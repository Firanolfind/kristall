/**
 *
 * @description Create new application dir bin task
 * @param	{[object]} 		argv 	[command line arguments]
 * @return	{[undefined]}	 		[]
 */

const Path	= require('path');
const FSE	= require('fs-extra');

const generatePackageJson	= require('./generatePackageJson.js');
const generateMarkdown		= require('./generateMarkdown.js');
const mkDir					= require('./utils/mkdir');

module.exports = function(argv){

	// Application name
	var appName = argv.path;
	// Ensure that default app name is not "." or "" and does not contain slashes.
	if (appName === '.' || appName === './' || !appName)
		appName = Path.basename(process.cwd());
	
	appName = argv.appname ? argv.appname : appName;
	appName = appName.replace(/.\//, '')
						.replace(/\//, '-');

	// Author
	var author = process.env.USER || 'anonymous';
	author = argv.username ? argv.username : author;

	// App title
	var title = argv.title ? argv.title : appName.charAt(0).toUpperCase() + appName.slice(1)

	var options = {
		title: 			title,
		name: 			appName,
		author: 		author,
		version: 		argv.appversion,
		description: 	argv.desc,
		license: 		argv.license,
		year:			(new Date()).getFullYear()
	};

	// destination path
	const dir = Path.resolve(__dirname, '../', argv.path);

	// create dir
	mkDir(dir)
		.catch(err=>{
			console.log('-'.repeat(60).yellow);
			console.log('dir already exists, cannot create project in existing directory'.red);
			console.log('-'.repeat(60).yellow);
			setImmediate(()=>{
				process.exit(1);
			});
		})
		// generate package json
		// generate readme
		// copy source files
		.then(()=> Promise.all([
				FSE.outputFile(Path.resolve(dir, 'package.json'), 			JSON.stringify(generatePackageJson(options), null, "  ")),
				FSE.outputFile(Path.resolve(dir, 'README.md'), 				generateMarkdown.readme(options)),
				FSE.copy(Path.resolve(__dirname, '../app/config'), 			Path.resolve(dir, 'config')),
				FSE.copy(Path.resolve(__dirname, '../app/source'), 			Path.resolve(dir, 'source')),
				FSE.copy(Path.resolve(__dirname, '../app/tasks'), 			Path.resolve(dir, 'tasks')),
				FSE.copy(Path.resolve(__dirname, '../app/pipeline.js'), 	Path.resolve(dir, 'pipeline.js')),
				FSE.copy(Path.resolve(__dirname, '../app/server.js'), 		Path.resolve(dir, 'server.js'))
			])
		)
		.then(()=>{
			console.log('-'.repeat(60).yellow);
			console.log('Project', title.cyan, 'just created!')
			console.log('Now type', `"cd ${argv.path}"`.yellow, 'and run', `"npm run watch"`.yellow, 'to get started')
			console.log('-'.repeat(60).yellow);
		})
		.catch(err=>{
			setImmediate(()=>{
				process.exit(1);
			});
		});
}