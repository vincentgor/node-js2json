'use strict';

var fs = require('fs');

/**
 * ### js file to json file
 * options.replacer        - function or null or undefined
 * options.space           - how many space, default 'use strict'
 */
function js2json(jsfile, jsonfile, options, callback) {

	if (arguments.length < 3) {
		return new Error('wrong params');
	}

	if (arguments.length === 3) {
		callback = options;
		options = {};
	}

	options = options || {};

	var jsObj = require(jsfile);

	var str = JSON.stringify(jsObj, options.replacer , options.space || 2);

	fs.writeFile(jsonfile, str, callback);
}

/**
 * ### json file to js file
 * options.prefix          - add some chars to the head file, default 'use strict'
 * options.replacer        - function or null or undefined
 * options.space           - how many space, default 'use strict'
 */
function json2js(jsonfile, jsfile, options, callback) {

	if (arguments.length < 3) {
		return new Error('wrong params');
	}

	if (arguments.length === 3) {
		callback = options;
		options = {};
	}

	options = options || {};

	var jsonObj = require(jsonfile);

	var str = '';

	if (options.prefix) {
		str += options.prefix;
	} else {
		str += "'use strict';";
	}
	str += '\n\nmodule.exports = ';

	str += JSON.stringify(jsonObj, options.replacer, options.space || 2);
	
	fs.writeFile(jsfile, str, callback);
}

module.exports.js2json = js2json;
module.exports.json2js = json2js;
