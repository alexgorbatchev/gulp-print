import * as map from 'map-stream';
import * as path from 'path';
import * as log from 'fancy-log';
import * as colors from 'ansi-colors';
import * as stream from 'stream';
import * as vinyl from 'vinyl';

export interface IFormatFunction {
  (filepath: String): String;
}

export interface IGulpPrintFunction {
  (format: IFormatFunction): stream.Stream;
  log: Function;
}

function gulpPrint(format: IFormatFunction): stream.Stream {
  if (format == null) {
    format = (filepath: String): String => filepath;
  }

  return map((file: vinyl, cb: map.INewDataCallback): void => {
    const filepath = colors.magenta(path.relative(process.cwd(), file.path));
    const formatted = format(filepath);

    if (formatted) {
      exportFunction.log(formatted);
    }

    cb(null, file);
  });
};

const exportFunction: IGulpPrintFunction = <IGulpPrintFunction>gulpPrint;

exportFunction.log = log;

export default exportFunction;
