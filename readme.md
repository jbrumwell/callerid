# CallerId

  Allows you to retrieve the filename or directory path of the file that has required your file/module.

## Installation

    $ npm install callerid

## Features

  - retrieve both the filename and the directory path

## methods

  - `dirname` retrieve the directory path instead of the filename


## Usage

Initiate

```js
var callerid = require('callerid');
```

Get last caller

```js
var file = callerid(),
    dir  = callerid.dirname();
```

Custom Levels
```js
//back two files
callerid(2);

//directory path two files ago
callerid.dirname(2);
```

## Running tests

```
$ npm install
$ npm test
```

## License

(The MIT License)

