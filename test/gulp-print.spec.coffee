require 'coffee-errors'

path = require 'path'
chai = require 'chai'
sinon = require 'sinon'
gutil  = require 'gulp-util'
# using compiled JavaScript file here to be sure module works
print = require '../lib/gulp-print.js'

expect = chai.expect
chai.use require 'sinon-chai'

describe 'gulp-print', ->
  it 'logs file paths', (done) ->
    stream = print()

    sinon.stub gutil, 'log'

    stream.on 'end', ->
      expect(gutil.log).to.have.been.calledOnce
      done()

    stream.write new gutil.File path: path.join process.cwd(), 'foo/bar.js'
    stream.end()
