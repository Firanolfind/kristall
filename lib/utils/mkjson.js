/**
 *
 * @description Make JSON file
 * @param	{[text]} 	path 		[destination dir path]
 * @param	{[text]} 	fname 		[file name]
 * @param	{[object]} 	json 		[json object to save]
 * @return	{[promise]}	 			[returns promise]
 */

const FS = require('fs');
const Path	= require('path');

module.exports = (path, fname, json)=> 
	new Promise((resolve, reject)=>
		FS.writeFile(
			Path.resolve(path, fname),
			JSON.stringify(json, null, "  "), err=>{
				if(err){
					reject(err);
				}else{
					resolve()
				}
			}
		)
	);