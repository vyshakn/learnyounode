var http = require('http'),
        fs = require('fs');
var args = process.argv;
var server = http.createServer(function (request, response) {
        /*request.pipe(response);*/
        response.writeHead(200);
        request.setEncoding("utf8");
        request.on('data', function (data) {
                //console.log(data.toUpperCase());
                response.write(data.toUpperCase());
        });
        request.on('end', function() {
                response.end();
        });
}).listen(args[args.length - 1]);
