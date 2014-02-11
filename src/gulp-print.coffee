map = require 'map-stream'
gutil = require 'gulp-util'
path = require 'path'

module.exports = ->
  map (file, cb) ->
    gutil.log gutil.colors.magenta path.relative process.cwd(), file.path
    cb null, file
