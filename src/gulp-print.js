/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const map = require('map-stream');
const path = require('path');
const {log, colors} = require('gulp-util');
const log = require('fancy-log');
const colors = require('ansi-colors');

const {green, magenta} = colors;

var print = function(format) {
  if (format == null) { format = filepath => filepath; }

  return map(function(file, cb) {
    const filepath = magenta(path.relative(process.cwd(), file.path));
    const formatted = format(filepath);
    if (formatted) { print.log(formatted); }
    return cb(null, file);
  });
};

print.log = log;
module.exports = print;
