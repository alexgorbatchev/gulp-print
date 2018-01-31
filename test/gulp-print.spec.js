/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
require('coffee-errors');

const path = require('path');
const chai = require('chai');
const sinon = require('sinon');
const Vinyl = require('vinyl');
const colors = require('ansi-colors');
// using compiled JavaScript file here to be sure module works
const print = require('../lib/gulp-print.js');

const { expect } = chai;
chai.use(require('sinon-chai'));

describe('gulp-print', function() {
  beforeEach(function() {
    sinon.stub(print, 'log');
  });

  afterEach(function() {
    print.log.restore();
  });

  return describe('passing formatting function', function() {
    it('logs file path using default formatter', function(done) {
      const stream = print();
      const filepath = path.join(process.cwd(), 'foo/bar.js');

      stream.on('end', function() {
        expect(print.log).to.have.been.calledWith(colors.magenta(path.relative(process.cwd(), filepath)));
        done();
      });

      stream.write(new Vinyl({path: filepath}));
      stream.end();
    });

    return it('logs file paths using custom formatter', function(done) {
      const stream = print(filepath => `Hello ${filepath}`);
      const filepath = path.join(process.cwd(), 'foo/bar.js');

      stream.on('end', function() {
        expect(print.log).to.have.been.calledWith(`Hello ${colors.magenta(path.relative(process.cwd(), filepath))}`);
        done();
      });

      stream.write(new Vinyl({path: filepath}));
      stream.end();
    });
  });
});

