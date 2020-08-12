const fs = require('fs');
const Buffer = fs.readFileSync(process.argv[2])
const str = Buffer.toString();
const lines = str.split('\n').length - 1  ;
console.log(lines);
