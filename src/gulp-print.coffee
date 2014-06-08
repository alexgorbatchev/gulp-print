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
    filepath = path.relative process.cwd(), file.path
    formatted = format colors.magenta(filepath), filepath
    print.log formatted if formatted
    cb null, file

print.log = log

module.exports = print
