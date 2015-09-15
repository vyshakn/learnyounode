var fs = require('fs');
var string = "";
fs.readFile(process.argv[process.argv.length - 1], 'utf8', function (err, string) {
    console.log(string.split('\n').length -1);
});
