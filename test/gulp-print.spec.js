require 'coffee-errors'

path = require 'path'
chai = require 'chai'
sinon = require 'sinon'
Vinyl = require 'vinyl'
colors = require 'ansi-colors'
# using compiled JavaScript file here to be sure module works
print = require '../lib/gulp-print.js'

expect = chai.expect
chai.use require 'sinon-chai'

describe 'gulp-print', ->
  beforeEach ->
    sinon.stub print, 'log'
    return

  afterEach ->
    print.log.restore()
    return

  describe 'passing formatting function', ->
    it 'logs file path using default formatter', (done) ->
      stream = print()
      filepath = path.join process.cwd(), 'foo/bar.js'

      stream.on 'end', ->
        expect(print.log).to.have.been.calledWith colors.magenta path.relative process.cwd(), filepath
        done()
        return

      stream.write new Vinyl path: filepath
      stream.end()
      return

    it 'logs file paths using custom formatter', (done) ->
      stream = print (filepath) -> "Hello #{filepath}"
      filepath = path.join process.cwd(), 'foo/bar.js'

      stream.on 'end', ->
        expect(print.log).to.have.been.calledWith "Hello #{colors.magenta path.relative process.cwd(), filepath}"
        done()
        return

      stream.write new Vinyl path: filepath
      stream.end()
      return
