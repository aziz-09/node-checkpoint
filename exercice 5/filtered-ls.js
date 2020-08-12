var fs = require('fs')
var path = require('path')
var arg = process.argv[2]
var ext1 = '.' + process.argv[3]

fs.readdir(arg, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext1) {
          console.log(file)
      }
  })
})