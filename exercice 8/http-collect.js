var http = require('http');
var bl = require('bl');
var arg1 = process.argv[2].toString();

http.get(arg1, function(response) {
    response.pipe(bl(function (err, data) {
        if (err) {
         return console.error(err)
                  }
 data = data.toString()
console.log(data.length)
console.log(data)
}))
});