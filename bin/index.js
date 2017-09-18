#!/usr/bin/env node

require('colors');

const Util 	= require('util');
const Yargs = require('yargs');
const Path	= require('path');
const FS	= require('fs');
const FSE	= require('fs-extra')

Yargs
	.help(false)
	.usage('Usage: $0 <cmd> [options]')
	.command({
		command: 'new <path> [value]',
		desc: 'create new project based on Kristall boilerplate',
		builder: yargs => {
			return yargs
		},
		handler: argv => {
		}
	})
	.option('verbose', {
		default: false,
		description: 'verbose mode, shows processing details',
		alias: 'V'
	})
	.option('appname', {
		default: undefined,
		description: 'application name',
		alias: 'a',
		type: 'string'
	})
	.option('title', {
		default: undefined,
		description: 'application title',
		alias: 't',
		type: 'string'
	})
	.option('username', {
		default: undefined,
		description: 'author user name',
		alias: 'u',
		type: 'string'
	})
	.option('appversion', {
		default: undefined,
		description: 'application version',
		type: 'string'
	})
	.option('desc', {
		default: undefined,
		description: 'user description',
		alias: 'd',
		type: 'string'
	})
	.option('license', {
		default: undefined,
		description: 'user license',
		alias: 'l',
		type: 'string'
	})
	.version('version', 'display version information', '1.0.1')
	.alias('version', 'v')
	.example('kristall new app'.yellow, 'creates new project')
	.epilog('for more information visit https://github.com/firanolfind/kristall')
	.demandCommand(1, 'non-existing or no command specified'.red)
	.showHelpOnFail(true);

const Commands = Yargs.getCommandInstance().getCommands();
const argv = Yargs.argv;



//Exit of no command
if (!argv._[0] || Commands.indexOf(argv._[0]) === -1) {
	Yargs.showHelp();
	console.log('non-existing or no command specified'.red);
	process.exit(1);
}

const verbose = argv.verbose;





// make dir
const mkDir = dir => new Promise((resolve, reject)=>{
	FS.mkdir(dir, err=>{
		if(err){
			reject(err);
		}else{
			resolve()
		}
	});
});

// make json
const mkJson = (dir, fname, json)=> new Promise((resolve, reject)=>{
	FS.writeFile(
		Path.resolve(dir, fname),
		JSON.stringify(json, null, "  "), err=>{
			if(err){
				reject(err);
			}else{
				resolve()
			}
		}
	);
});


//Create new
if(argv._.indexOf('new') >= 0){

	// Application name
	var appName = argv.path;
	// Ensure that default app name is not "." or "" and does not contain slashes.
	if (appName === '.' || appName === './' || !appName)
		appName = Path.basename(process.cwd());
	appName = argv.appname ? argv.appname : appName;
	console.log(appName)
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

	const dir = Path.posix.resolve(__dirname, '../', argv.path);
	const generatePackageJson 	= require('./package.json.js');

	var package_json 			= generatePackageJson(options);
	console.log(options)

	mkDir(dir)
		.then(()=>{
			Promise.all([
				mkJson(dir, 'package.json', package_json),
				FSE.copy('app/config', 		Path.resolve(dir, 'config')),
				FSE.copy('app/source', 		Path.resolve(dir, 'source')),
				FSE.copy('app/tasks', 		Path.resolve(dir, 'tasks')),
				FSE.copy('app/pipeline.js', Path.resolve(dir, 'pipeline.js')),
				FSE.copy('app/server.js', 	Path.resolve(dir, 'server.js'))
			]).catch(err=>{
				console.error(err.red);
				setImmediate(()=>{
					process.exit(1);
				});
			})

		})
		.then(()=>{
			console.log('done!'.cyan)
		})
		.catch(err=>{
			console.log('dir already exists, cannot create project to existing directory'.red);
			setImmediate(()=>{
				process.exit(1);
			});
		});
}