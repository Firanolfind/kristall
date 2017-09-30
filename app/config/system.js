/**
 * @config
 * @title Application
 */

require('colors');

var crystal_color 	= 'white';
var shine_color 	= 'yellow';
var text_color 		= 'yellow';
var version_color 	= 'blue';
var install_color 	= 'red';
var border_color  	= 'green';

header = CONFIG => `
   .───.
  /  .  \\
 │   │\\_/│
 │\\  │   │
 │ \`───────────────────────────────────────────────────────────────────────-.`[border_color] + `
 │  `[border_color] + `   _  __       _       _          _  _  `[text_color] + `                            .─.  \\`[border_color] + `
 │  `[border_color] + `  │ │/ / _ __ (_) ___ │ │_  __ _ │ ││ │ `[text_color] + `        `+`v0.1.2`[version_color]+`             /   \\  │`[border_color] + `
 │  `[border_color] + `  │ ' / │ '__││ │/ __││ __│/ _\` ││ ││ │ `[text_color] + `                          │    /│ │`[border_color] + `
 │  `[border_color] + `  │ . \\ │ │   │ │\\__ \\│ │_│ (_│ ││ ││ │ `[text_color] + `   ` + `npm install kristall`[install_color]+`   │\\  │ │/│`[border_color] + `
 │  `[border_color] + `  │_│\\_\\│_│   │_││___/ \\__│\\__,_││_││_│ `[text_color] + `                          │ \`───' │`[border_color] + `
  \\                                                                   │       │ 
   \`──────────────────────────────────────────────────────────────────│       │
                                                                       \\     /
                                                                        \`───'
`[border_color];

module.exports = {
	header: header
};