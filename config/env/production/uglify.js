/**
 * @config
 * @title Uglify
 * @package uglify gulp-uglify
 * @env production
 */

module.exports = {
	warnings: false,
	parse: {
		bare_returns:	false,
		html5_comments: true,
		shebang:		true,
	},
	compress: {
		sequences:		true,
		properties: 	true,
		dead_code: 		true,
		drop_debugger: 	true,
		unsafe: 		true,
		unsafe: 		true,
		unsafe_comps: 	true,
		unsafe_Func: 	true,
		unsafe_math: 	true,
		unsafe_proto: 	true,
		unsafe_regexp: 	false,
		conditionals: 	true,
		comparisons: 	true,
		evaluate:		true,
		booleans:		true,
		typeofs:		true,
		loops:			true,
		unused:			true,
		toplevel:		true,
		top_retain:		[],
		hoist_funs:		true,
		hoist_vars:		false,
		if_return:		true,
		inline:			true,
		join_vars:		true,
		cascade:		true,
		collapse_vars:	true, //?
		reduce_vars:	true,
		warnings:		true,
		negate_iife:	true,
		pure_getters:	true, // false, 'strict' | foo.bar -> foo["bar"] | need tests
		pure_funcs:		[ 'Math.floor' ], //add functions with no side effect etc
		drop_console:	true,
		expression:		true,
		keep_fargs:		true,
		keep_fnames:	true,
		passes:			5, // number of compress iterations
		keep_infinity:	false,
		side_effects:	true, // /*@__PURE__*/bar(); or /*#__PURE__*/foo();
	},
	mangle: {},
	/*mangle:{
		reserved: 		[],
		// topLevel: 		false,
		keep_fnames: 	true,
		eval:			false,
		properties: {
			regex: 			null,
			reserved: 		[],
			keep_quoted: 	false,
			debug: 			false,
		}
	},*/
	output: {
		beautify: 	false,
		bracketize: false,
		comments: 	false
	},
	sourceMap: 	false,
	nameCache:	{},
	ie8: 		false
};