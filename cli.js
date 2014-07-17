#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var treejson = require('./');
var input = process.argv[2];

function help(){
	console.log("Usage : tree-json <path>");
}


if (!input) {
	help();
	return;
}

console.log(JSON.stringify( treejson(input), null, 2));