var http = require('http'),
        url = require('url');
var date;
http.createServer(function (request, response) {
        var urlObj = url.parse(request.url,true);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        switch(urlObj.pathname) {
                case '/api/parsetime':
                        if(urlObj.query.hasOwnProperty('iso')) {
                                date = new Date(urlObj.query.iso);
                        } else {
                                date = new Date();
                        }
                        var retJson = {
                                hour: date.getHours(),
                                minute: date.getMinutes(),
                                second: date.getSeconds()
                        };
                        response.write(JSON.stringify(retJson));
                        response.end();
                        break;
                case '/api/unixtime':
                        if(urlObj.query.hasOwnProperty('iso')) {
                                date = new Date(urlObj.query.iso);
                        } else {
                                date = new Date();
                        }
                        var retJson = {
                                unixtime:date.getTime()
                        };
                        response.write(JSON.stringify(retJson));
                        response.end();
                        break;
        }
}).listen(process.argv[process.argv.length - 1]);
