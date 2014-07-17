'use strict';

var fs = require('fs'),
	path = require('path');


function tree(filepath) {

	filepath = path.normalize(filepath);

	var stats = fs.lstatSync(filepath),
		result = {
			path:filepath,
			name:path.basename(filepath)
		};

	if (stats.isDirectory()) {
		result.type = "folder";

		result.children = fs.readdirSync(filepath).map(function(child) {
			return tree(filepath + '/' + child);
		});

	} else {
		result.type = "file";
	}

	return result;
}

module.exports = tree;
