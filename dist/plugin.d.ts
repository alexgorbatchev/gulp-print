/// <reference types="node" />
import * as stream from 'stream';
export interface FormatFunction {
    (filepath: String): String;
}
export interface LogFunction {
    (message: String): void;
}
export declare function setLogFunction(fn: LogFunction): void;
export default function gulpPrint(format?: FormatFunction): stream.Stream;
