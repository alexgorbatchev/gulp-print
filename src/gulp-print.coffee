map = require 'map-stream'
gutil = require 'gulp-util'
path = require 'path'

module.exports = (format) ->
  format ?= (filepath) -> filepath

  map (file, cb) ->
    gutil.log format gutil.colors.magenta path.relative process.cwd(), file.path
    cb null, file
