/**
 *
 * @param	{[object]} 	options 	[arguments options and defaults]
 * @return	{[string]}	markdown 	[redme markdown]
 */
const readme = function(options){

	var md = `
# ${options.title}

Project created using **Kristall.js** 

[See Kristall.js](https://github.com/Firanolfind/Kristall/edit/master/README.md) for more details.
`;

	return md;
}

module.exports = {
	readme: readme
}