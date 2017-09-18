
module.exports = function(argv){

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