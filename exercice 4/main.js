
var arg = process.argv[2]
var fs = require('fs')  
fs.readFile(arg, function (err, contents) {  
    var buf = contents.toString()
    var lines = buf.split('\n').length - 1  
    console.log(lines)  
  })