/**
 * @config
 * @title Server path configs
 * @target server
 */

/*
// --------------------------------------
//	FRAMEWORK DIRECTORY PATHS
// --------------------------------------
	path_root:			Path.join(__dirname, '..'),
	path_server:		__dirname,
	path_public: 		'/public',
	path_public_js: 	'/public/js',
	path_public_css:	'/public/css',
	path_download: 		'/public/upload',
	path_tmp: 			'/public/tmp',


// --------------------------------------
//	URL PATH
// --------------------------------------
	url_public:		'/public',
	url_upload:		'/api/upload',
	url_api:		'/api',
*/

module.exports = {
	public: {
		dir: 	'./build/',
		files: 	'./build/**/*.**',
	},
	url: {
		static: '/'
	}
};