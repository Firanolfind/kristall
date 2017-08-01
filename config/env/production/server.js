/**
 * @config
 * @title Server
 * @name server
 * @env production
 */

const Path = require('path');

module.exports = {
	verbose: false,
	options: {
		load: {
			sampleInterval:			60 	* 1000, // ms
		}
	},
	settings: {
		port:						'localhost',
		host:						3000,
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