var http = require('http'),
        fs = require('fs');
var args = process.argv;

var server = http.createServer(function (request, response) {
        fs.createReadStream(args[args.length - 1]).pipe(response);
}).listen(args[args.length - 2]);
