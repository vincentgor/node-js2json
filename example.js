'use strict';

var util = require('./');

util.js2json('./package1.js', './package1.json', function () {
	console.log('finished');
});

util.json2js('./package.json', './index1.js', function () {
	console.log('finished');
});