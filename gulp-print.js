"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map = require("map-stream");
const path = require("path");
const log = require("fancy-log");
const colors = require("ansi-colors");
const result = (() => {
    const gulpPrint = function (format) {
        if (format == null) {
            format = (filepath) => filepath;
        }
        function mapFile(file, cb) {
            const filepath = colors.magenta(path.relative(process.cwd(), file.path));
            const formatted = format(filepath);
            if (formatted) {
                gulpPrint.log(formatted);
            }
            cb(null, file);
        }
        return map(mapFile);
    };
    gulpPrint.log = log;
    return gulpPrint;
})();
exports.default = result;
//# sourceMappingURL=gulp-print.js.map
