var http = require('http');

http.get(process.argv[process.argv.length - 1], function (response) {
        response.setEncoding("utf8");
        /*response.on('data', function (data) {
                console.log(data);
        });*/
        response.on('data', console.log);
});
