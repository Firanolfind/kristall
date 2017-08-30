/**
 * @config
 * @title Build files & dir paths
 * @target source
 */

module.exports = {
	'*': {
		dir: './build/',
		files:	[
			'./build/**/{*.**,!sftp-config.json}',
			'!./build/**/sftp-config.json'
		]
	},
	server: {
		filename: 	'{*.js,*.html,*.json}',
		files: [
			'./build/{*.js,*.html,*.json}',
			'!./build/sftp-config.json'
		],
		dir: './build/',
		html: {
			filename: 	'index.html',
			files: 		'./build/*.{tpl,html}',
		}
	},
	client: {
		filename: 		'index.js',
		filename_min: 	'index.min.js',
		files: 			'./build/assets/js/**/*.js',
		file: 			'./build/assets/js/index.js',
		file_min: 		'./build/assets/js/index.min.js',
		dir: 			'./build/assets/js/',
	},
	styles: {
		filename: 		'style.css',
		filename_min:	'style.min.css',
		files: 			'./build/assets/css/*.css',
		file: 			'./build/assets/css/style.css',
		file_min: 		'./build/assets/css/style.min.css',
		dir: 			'./build/assets/css/',
	},
	images: {
		favicon: 		{
			filename: 	'favicon.png',
			file: 		'./build/assets/images/favicon.png'
		},
		filename: 		'**/*.{jpg,png,gif}',
		files: 			'./build/assets/images/**/*.{jpg,png,gif}',
		dir: 			'./build/assets/images/',
	},
	svg: {
		filename: 		'**/*.svg',
		files: 			'./build/assets/images/**/*.svg',
		dir: 			'./build/assets/images/',
	},
	fonts: {
		filename: 		'**/*.{ttf,woff,woff2,eot,svg}',
		files: 			'./build/assets/fonts/**/*.{jpg,ttf,woff,woff2,eot,svg}',
		dir: 			'./build/assets/fonts/',
	}
};