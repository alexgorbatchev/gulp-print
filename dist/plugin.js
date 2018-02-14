import * as mapNs from 'map-stream';
let map = mapNs.default || mapNs;
import * as path from 'path';
import * as fancyLog from 'fancy-log';
import * as colors from 'ansi-colors';
let log = fancyLog;
export function setLogFunction(fn) {
    log = fn;
}
export default function gulpPrint(format) {
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
//# sourceMappingURL=plugin.js.map