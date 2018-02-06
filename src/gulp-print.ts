import * as map from 'map-stream';
import * as path from 'path';
import * as fancyLog from 'fancy-log';
import * as colors from 'ansi-colors';
import * as stream from 'stream';
import * as vinyl from 'vinyl';

export interface FormatFunction {
  (filepath: String): String;
}

export interface LogFunction {
  (message: String): void;
}

let log: LogFunction = fancyLog;

export function setLogFunction(fn: LogFunction): void {
  log = fn;
}

export default function gulpPrint(format?: FormatFunction): stream.Stream {
  if (!format) {
    format = (filepath: String): String => filepath;
  }

  function mapFile(file: vinyl, cb: map.INewDataCallback): void {
    const filepath = colors.magenta(path.relative(process.cwd(), file.path));
    const formatted = format(filepath);

    if (formatted) {
      log(formatted);
    }

    cb(null, file);
  }

  return map(mapFile);
}
