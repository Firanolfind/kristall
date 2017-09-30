/*
 * @title Pipeline
 * @project Kristall
 * @script
 * @description project pipeline, task manager, bundle of gulp tasks
 */
 /*
                                        X
                                    ,^\.    x
                              X   ."__ X',                          
                               x  \░░░` X▄\
                                _/:\░░░x██/ 
   .───.                       /░░▄X ░░▄▀X/`\
  /  .  \                      \░▄█▄│\░▀/,░/█
 │   │\_/│                   X /\░█▀x`X█/░+▀
 │\  │   │                
 │ `───────────────────────────────────────────────────────────────────────-.
 │     _  __       _       _          _  _                              .─.  \
 │    │ │/ / _ __ (_) ___ │ │_  __ _ │ ││ │          v0.1.5            /   \  │
 │    │ ' / │ '__││ │/ __││ __│/ _` ││ ││ │                           │    /│ │
 │    │ . \ │ │   │ │\__ \│ │_│ (_│ ││ ││ │    npm install kristall   │\  │ │/│
 │    │_│\_\│_│   │_││___/ \__│\__,_││_││_│                           │ `───' │
  \                                                                   │       │
   `──────────────────────────────────────────────────────────────────│       │
                                                                       \     /
                                                                        `───'
*/

require('colors');
const Gulp			= require('gulp'),
	GUtil			= require('gulp-util'),
	Tasks			= require('gulp-require-tasks'),
	RequireDir 		= require('require-dir');

const CONFIG 		= RequireDir('./config', {recurse: true});

const NODE_ENV 		= process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const DEV 			= NODE_ENV !== 'production';

// export global configuration
global.CONFIG = CONFIG;

// export global child processes
global.CHILD_PROCESSES = [];

// Handle exit
function exitHandler(options, err) {
	if (options.cleanup){
		if(CHILD_PROCESSES.length){
			GUtil.log(`killing ${CHILD_PROCESSES.length} child processes`);
			CHILD_PROCESSES.forEach(child => {
				GUtil.log(`killed ${child.pid}`);
				child.kill();
			});
		}
	}
	if (err) GUtil.log(err.stack);
	if (options.exit) process.exit();
}

process.on('exit', 				exitHandler.bind(null, {cleanup:true}));
process.on('SIGINT', 			exitHandler.bind(null, {exit:true}));
process.on('SIGUSR1', 			exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', 			exitHandler.bind(null, {exit:true}));
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

// exit on buggy шindoшs
if(process.platform === "win32"){
	var rl = require("readline").createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.on("SIGINT", ()=>{process.emit("SIGINT")});
}

// print nice project header :)
CONFIG.system.header && console.log(CONFIG.system.header(CONFIG))

// echo environment mode
GUtil.log(`Task runs in "${NODE_ENV.toUpperCase()[DEV ? 'red' : 'blue']}" mode`);

// load tasks recursivly
Tasks({
	gulp:			Gulp,
	passGulp:		true,
	passCallback:	true,
	separator:		':',
	path:			process.cwd() + '/tasks'
});