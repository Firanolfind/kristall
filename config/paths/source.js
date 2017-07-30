/**
 * @config
 * @title Source files & dir paths
 * @target source
 */

module.exports = {
	server: {
		filename: 	'{*.js,*.html,*.json,*.tpl,*.ejs}',
		files: [
			'./source/server/**/{*.js,*.html,*.json,*.tpl,*.ejs}',
			'!./source/server/**/sftp-config.json'
		],
		dir: 		'./source/server/',
		html: {
			filename: '{*.html,*.tpl,*.ejs}',
			files: [
				'./source/server/**/{*.html,*.tpl,*.ejs}',
				'!./source/server/**/sftp-config.json'
			],
		}
	},
	client: {
		filename: 	'index.js',
		files: 		'./source/client/**/*.{js,tpl,ejs}',
		file: 		'./source/client/index.js',
		dir:		'./source/client/',
	},
	styles: {
		filename: 	'index.scss',
		file: 		'./source/styles/index.scss',
		files: 		'./source/styles/**/*.scss',
		dir: 		'./source/styles/',
	},
	images: {
		filename: 	'**/*.{jpg,png,gif}',
		files: 		'./source/images/**/*.{jpg,png,gif}',
		dir: 		'./source/images/',
	},
	svg: {
		filename: 	'**/*.svg',
		files: 		'./source/images/**/*.svg',
		dir: 		'./source/images/',
	},
	fonts: {
		filename: 	'**/*.{jpg,ttf,woff,eot,svg}',
		files: 		'./source/fonts/**/*.{ttf,woff,eot,svg}',
		dir: 		'./source/fonts/',
	}
};