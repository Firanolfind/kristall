#!/usr/bin/env node

require('colors');

const Util 	= require('util');
const Yargs = require('yargs');
const Path	= require('path');
const FS	= require('fs');
const FSE	= require('fs-extra');

const kristallJson = require('../package.json');

Yargs
	.help()
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
	.version('version', 'display version information', kristallJson.version)
	.alias('version', 'v')
	.example('kristall new app'.yellow, 'creates new project')
	.epilog('for more information visit https://github.com/firanolfind/kristall')
	.showHelpOnFail(true);



const Commands = Yargs.getCommandInstance().getCommands();
const argv = Yargs.argv;

//Exit if no command
if (!argv._[0] || (Commands.indexOf(argv._[0]) === -1 && argv._[0] !== 'help') ) {
	Yargs.showHelp();
	console.log('non-existing or no command specified'.red);
	process.exit(1);
}

//Create new task
if(argv._.indexOf('new') >= 0){
	require('../lib/new')(argv);
}