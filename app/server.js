
const Path 			= require('path'),
	Hapi 			= require('hapi'),
	Inert 			= require('inert'),
	RequireDir 		= require('require-dir'),
	_ = {
		defaultsDeep: require('lodash.defaultsdeep')
	};

const CONFIG 	= RequireDir('./config', {recurse: true});
const NODE_ENV 	= process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const DEV		= NODE_ENV !== 'production';
const VERBOSE	= CONFIG.env[NODE_ENV].server.verbose;

// New Server
const Server = new Hapi.Server(CONFIG.env[NODE_ENV].server.options);

// Setting up the server
Server.connection(
	_.defaultsDeep({
		routes: {
			files: {
				relativeTo: CONFIG.paths.server.public.dir,
				relativeTo: Path.posix.join(__dirname, 'build')
			},
		}
	}, CONFIG.env[NODE_ENV].server.settings));

// Register static handler plugin
Server.register(Inert, () => {});

// Routes
Server.route([{ // route to static files
	method: 'GET',
	path: Path.posix.join(CONFIG.paths.server.url.static, '/{path*}'),
	config: {
		handler: {
			directory: {
				path: Path.posix.join(__dirname, CONFIG.paths.server.public.dir),
				redirectToSlash: 	true,
				index: 				true
			} 
		}
	}
},{ // route others
	method: 'GET',
	path: '/{path*}',
	handler: (req, reply) => 
		reply.file(Path.posix.join(__dirname, CONFIG.paths.server.public.dir, CONFIG.paths.build.server.html.filename))
}]);

// Start the server
Server.start(function(){
	VERBOSE && console.log(`+-----------------------------------------------+`.yellow	);
	VERBOSE && console.log(`|  `.yellow, `Server started!`.white						);
	VERBOSE && console.log(`+-----------------------------------------------+`.yellow	);	
	VERBOSE && console.log(`Server running at => `.white + Server.info.uri.yellow	);
	VERBOSE && console.log(`+-----------------------------------------------+`.yellow	);
});