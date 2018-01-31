/// <reference types="node" />
import * as stream from 'stream';
export interface IFormatFunction {
    (filepath: String): String;
}
export interface IGulpPrintFunction {
    (format?: IFormatFunction): stream.Stream;
    log: Function;
}
declare const exportFunction: IGulpPrintFunction;
export default exportFunction;
