# errsome

Making errors more loggable, readable and serializable

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Why?

There is [some problems](https://gist.github.com/astur/d93bdcafce2342242841b76986e4a79d) with Error object in node.js, so why not try to handle it?

## Synopsis

```
~/js/github/errsome $ node
> const errsome = require('.')
undefined
> const err = new TypeError('This is a message')
undefined
> err.field = 'bla'
'bla'
> err
{ TypeError: This is a message
    at repl:1:13
    at ContextifyScript.Script.runInThisContext (vm.js:50:33)
    at REPLServer.defaultEval (repl.js:239:29)
    at bound (domain.js:301:14)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at REPLServer.onLine (repl.js:440:10)
    at emitOne (events.js:120:20)
    at REPLServer.emit (events.js:210:7)
    at REPLServer.Interface._onLine (readline.js:282:10)
    at REPLServer.Interface._line (readline.js:631:8) field: 'bla' }
> errsome(err)
{ name: 'TypeError',
  message: 'This is a message',
  stack:
   [ 'TypeError: This is a message',
     'at repl:1:13',
     'at ContextifyScript.Script.runInThisContext (vm.js:50:33)',
     'at REPLServer.defaultEval (repl.js:239:29)',
     'at bound (domain.js:301:14)',
     'at REPLServer.runBound [as eval] (domain.js:314:12)',
     'at REPLServer.onLine (repl.js:440:10)',
     'at emitOne (events.js:120:20)',
     'at REPLServer.emit (events.js:210:7)',
     'at REPLServer.Interface._onLine (readline.js:282:10)',
     'at REPLServer.Interface._line (readline.js:631:8)' ],
  field: 'bla' }
>
```

## Install

```bash
npm i errsome
```

## Usage

```js
const errsome = require('errsome');

const err = new Error('Bla-bla-bla');

const awesomeError = errsome(err);

const serializedError = errsome.stringify(err, 2);
// It is just a short form for this:
// require('json5').stringify(err, null, 2);

errsome.log(err, 2);
// It is just a short form for this:
// console.log(errsome.stringify(err, 2));
```

## License

MIT

[npm-url]: https://npmjs.org/package/errsome
[npm-image]: https://badge.fury.io/js/errsome.svg
[travis-url]: https://travis-ci.org/astur/errsome
[travis-image]: https://travis-ci.org/astur/errsome.svg?branch=master