#!/usr/bin/env node

require('colors');

const Util 	= require('util');
const Yargs = require('yargs');
const Path	= require('path');

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

//Create new
if(argv._.indexOf('new') >= 0){
	console.log('instalation...');
	console.log('instalation compleete');

	var generatePackageJson = require('./package.json.js');

	console.log(argv);
	console.log(Path.posix.resolve(__dirname, '../', argv.path));

	console.log(generatePackageJson({}))
}