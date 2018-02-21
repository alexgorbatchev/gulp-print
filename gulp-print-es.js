import * as mapNs from 'map-stream';
import mapNs__default, {  } from 'map-stream';
import { relative } from 'path';
import * as fancyLog from 'fancy-log';
import { magenta } from 'ansi-colors';

let map = mapNs__default || mapNs;
let log = fancyLog;

function gulpPrint(format) {
    if (!format) {
        format = (filepath) => filepath;
    }
    function mapFile(file, cb) {
        const filepath = magenta(relative(process.cwd(), file.path));
        const formatted = format(filepath);
        if (formatted) {
            log(formatted);
        }
        cb(null, file);
    }
    return map(mapFile);
}

export default gulpPrint;
//# sourceMappingURL=gulp-print-es.js.map
