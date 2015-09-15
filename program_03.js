var fs = require('fs');
console.log(fs.readFileSync(process.argv[process.argv.length - 1]).toString().split('\n').length - 1);
