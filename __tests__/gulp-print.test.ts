import 'mocha';

import * as colors from 'ansi-colors';
import * as chai from 'chai';
import * as path from 'path';
import * as sinon from 'sinon';
import * as Vinyl from 'vinyl';

import { Writable } from 'stream';
import print, { setLogFunction } from '../src/gulp-print';

chai.use(require('sinon-chai'));

describe('gulp-print', () => {
  let logStub: sinon.SinonStub;

  beforeEach(() => {
    logStub = sinon.stub();
    setLogFunction(logStub);
  });

  describe('passing formatting function', () => {
    it('logs file path using default formatter', done => {
      const stream = print() as Writable;
      const filepath = path.join(process.cwd(), 'foo/bar.js');

      stream.on('end', () => {
        chai.expect(logStub).to.have.been.calledWith(colors.magenta(path.relative(process.cwd(), filepath)));
        done();
      });

      stream.write(new Vinyl({ path: filepath }));
      stream.end();
    });

    it('logs file paths using custom formatter', done => {
      const stream = print(filepath => `Hello ${filepath}`) as Writable;
      const filepath = path.join(process.cwd(), 'foo/bar.js');

      stream.on('end', () => {
        chai.expect(logStub).to.have.been.calledWith(`Hello ${colors.magenta(path.relative(process.cwd(), filepath))}`);
        done();
      });

      stream.write(new Vinyl({ path: filepath }));
      stream.end();
    });
  });
});
