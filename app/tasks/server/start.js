/**
 * @title Server Start
 * @task
 * @name server:start
 * @description launches server
 */

const Pump	= require('pump'),
	GUtil	= require('gulp-util'),
	Spawn 	= require('child_process').spawn;

var ServerProcess;

// child node arguments
// to debug server add '--debug=5859'
const execArgv = [];
var restarted = false;

module.exports = {
	deps: [],
	fn: function(Gulp, cb){

		if(ServerProcess){
			var index = CHILD_PROCESSES.indexOf(ServerProcess);
			if(index > -1)
				CHILD_PROCESSES.splice(index, 1);
			GUtil.log('Shutting down the server');
			ServerProcess.kill();
		}

		ServerProcess = Spawn('node', [CONFIG.paths.server.startup.script], {
			stdio: 'inherit',
			execArgv: execArgv
		});

		ServerProcess.on('close', code => {
			if(code === 8) {
				GUtil.log('Server error detected, waiting for changes...');
			}
			restarted = true;
		});

		setImmediate(()=>{
			GUtil.log(restarted ? 'Restarting' : 'Starting', 'the server');
		});

		CHILD_PROCESSES.push(ServerProcess);

		cb();
	}
};