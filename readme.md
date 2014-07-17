# tree-json
> convert a directory tree to json

## Install

```bash
$ npm install --save tree-json
```

## Usage

```js
var treejson = require('tree-json');

console.log(JSON.stringify( treejson("./pancake"), null, 2) );
```

## CLI

```bash
$ npm install --g tree-json
```