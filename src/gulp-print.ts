import * as map from 'map-stream';
import * as path from 'path';
import * as log from 'fancy-log';
import * as colors from 'ansi-colors';
import * as stream from 'stream';
import * as vinyl from 'vinyl';

export interface FormatFunction {
  (filepath: String): String;
}

export interface GulpPrintFunction {
  (format?: FormatFunction): stream.Stream;
  log: Function;
}

const result: GulpPrintFunction = (() => {
  const gulpPrint: any = function(format?: FormatFunction): stream.Stream {
    if (format == null) {
      format = (filepath: String): String => filepath;
    }

    function mapFile(file: vinyl, cb: map.INewDataCallback): void {
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

  return gulpPrint as GulpPrintFunction;
})();

export default result;
