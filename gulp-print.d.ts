/// <reference types="node" />
import * as stream from 'stream';
export interface FormatFunction {
    (filepath: String): String;
}
export interface GulpPrintFunction {
    (format?: FormatFunction): stream.Stream;
    log: Function;
}
declare const result: GulpPrintFunction;
export default result;
