/**
 *
 * @description Make directory
 * @param	{[text]} 		dir 	[destination dir path]
 * @return	{[promise]}	 			[returns promise]
 */

const FS = require('fs');

module.exports = dir => new Promise((resolve, reject)=>{
	FS.mkdir(dir, err=>{
		if(err){
			reject(err);
		}else{
			resolve()
		}
	});
});