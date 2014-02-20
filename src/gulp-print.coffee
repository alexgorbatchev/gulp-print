map = require 'map-stream'
colors = require 'colors'
path = require 'path'

log = ->
  sig = "[#{colors.green('gulp')}]"
  args = Array.prototype.slice.call arguments
  args.unshift sig

  console.log.apply console, args

print = (format) ->
  format ?= (filepath) -> filepath

  map (file, cb) ->
    print.log format colors.magenta path.relative process.cwd(), file.path
    cb null, file

print.log = log

module.exports = print
