/**
 * @config
 * @title Server
 * @name server
 * @env development
 */

const Path = require('path');

module.exports = {
	verbose: {

	},
	options: {
		load: {
			sampleInterval:			60 	* 1000, // ms
		},
		debug: {
			request: ['error', 'uncaught'],
		}
	},
	settings: {
		port:						3300,
		host:						'localhost',
		router: {
			stripTrailingSlash: 	true,
			isCaseSensitive: 		false
		},
		load:{
			maxHeapUsedBytes:		100 * 1024*1024, //100 MB // bytes
			maxRssBytes:			100 * 1024*1024, //100 MB // bytes
			maxEventLoopDelay:		7 	* 1000, // ms
		},
		routes: {
			payload:{
				maxBytes: 			1 	* 1024*1024, //1 MB // bytes
			}
		}
	}
};