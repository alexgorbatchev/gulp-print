'use strict';

var mapNs = require('map-stream');
var mapNs__default = mapNs['default'];
var path = require('path');
var fancyLog = require('fancy-log');
var colors = require('ansi-colors');

let map = mapNs__default || mapNs;
let log = fancyLog;

function gulpPrint(format) {
    if (!format) {
        format = (filepath) => filepath;
    }
    function mapFile(file, cb) {
        const filepath = colors.magenta(path.relative(process.cwd(), file.path));
        const formatted = format(filepath);
        if (formatted) {
            log(formatted);
        }
        cb(null, file);
    }
    return map(mapFile);
}

module.exports = gulpPrint;
//# sourceMappingURL=gulp-print.js.map
