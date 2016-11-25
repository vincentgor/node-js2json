# node-js2json
js file to json file

## Install

```
$ npm install js-2-json-file
```

## Usage

convert js file to json file or the opposite


## API

##### js2json(jsfile, jsonfile, [options, ]callback)
`options`
- replacer: the second parameter of function `JSON.stringify`
- space   :  the number of spaces, default 2
example
```
var js2json= require('js-2-json-file');
js2json.js2json('./package1.js', './package1.json', function () {
	console.log('finished');
});
```

package1.js

```
'use strict';

module.exports = {
  "name": "js-2-json-file",
  "version": "0.0.1",
  "description": "js file to json file"
}
```
package1.json
```
{
  "name": "js-2-json-file",
  "version": "0.0.1",
  "description": "js file to json file"
}
```

##### json2js(jsonfile, jsfile, [options, ]callback)
`options`
- prefix    :  the chars added to the head of file, default `use strict`
- replacer: the second parameter of function `JSON.stringify`
- space   :  the number of spaces, default 2
example
```
var js2json= require('js-2-json-file');
js2json.json2js('./package1.json', './package1.js', function () {
	console.log('finished');
});
```

package1.json
```
{
  "name": "js-2-json-file",
  "version": "0.0.1",
  "description": "js file to json file"
}
```
package1.js
```
'use strict';
module.exports = {
  "name": "js-2-json-file",
  "version": "0.0.1",
  "description": "js file to json file"
}
```

## License

[The MIT License](http://opensource.org/licenses/MIT)