declare module 'map-stream' {
  import stream = require('stream');

  namespace mapStream {
    type IData = Object;

    interface INewDataCallback {
      (error: Error, newData: IData): void;
    }

    interface IDataCallback {
      (data: IData, callback: INewDataCallback): void;
    }
  }

  function mapStream(callback: mapStream.IDataCallback): stream.Stream;

  export = mapStream;
}
