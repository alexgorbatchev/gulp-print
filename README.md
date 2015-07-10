# gulp-print

This is a very basic [gulp](http://gulpjs.com) plugin that prints names of files.


[![GitTip](http://img.shields.io/gittip/alexgorbatchev.svg)](https://gittip.com/alexgorbatchev)
[![Dependency status](https://david-dm.org/alexgorbatchev/gulp-print.svg)](https://david-dm.org/alexgorbatchev/gulp-print)
[![devDependency Status](https://david-dm.org/alexgorbatchev/gulp-print/dev-status.svg)](https://david-dm.org/alexgorbatchev/gulp-print#info=devDependencies)
[![Build Status](https://secure.travis-ci.org/alexgorbatchev/gulp-print.svg?branch=master)](https://travis-ci.org/alexgorbatchev/gulp-print)

[![NPM](https://nodei.co/npm/gulp-print.svg)](https://npmjs.org/package/gulp-print)

## Support

Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [Gittip](http://gittip.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![GitTip](http://img.shields.io/gittip/alexgorbatchev.svg)](https://gittip.com/alexgorbatchev)
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PSDPM9268P8RW "Donate once-off to this project using Paypal")

## Installation

```sh
npm install gulp-print
```

## Usage Example

```js
var gulp = require('gulp');
var print = require('gulp-print');
```

Using default formatter:

```js
gulp.task('print', function() {
  gulp.src('test/*.js')
    .pipe(print())
});
```

Or using custom formatter:

```js
gulp.task('print', function() {
  gulp.src('test/*.js')
    .pipe(print(function(filepath) {
      return "built: " + filepath;
    }))
});
```

If you want to turn colors off:

```js
gulp.task('print', function() {
  gulp.src('test/*.js')
    .pipe(print({colors: false}));
});
```

## API

### print(format or {format, colors})

* `format` is a callback format function that passes in filepath to be printed. Callback should return a string which will be printed.
* `colors` is a boolean which defaults to `true`.

## Testing

```sh
npm test
```

## License

The MIT License (MIT)

Copyright 2014 Alex Gorbatchev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
