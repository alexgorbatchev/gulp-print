map = require 'map-stream'
path = require 'path'
log = require 'fancy-log'
colors = require 'ansi-colors'

{green, magenta} = colors

print = (format) ->
  format ?= (filepath) -> filepath

  map (file, cb) ->
    filepath = magenta(path.relative(process.cwd(), file.path))
    formatted = format(filepath)
    print.log(formatted) if formatted
    cb(null, file)

print.log = log
module.exports = print
