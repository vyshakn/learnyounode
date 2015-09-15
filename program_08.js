var http = require('http'),
        bl = require('bl');
var totalData = "";
http.get(process.argv[process.argv.length - 1], function (response) {
        /*response.setEncoding("utf8");
        response.on('data', function(data) {
                totalData += data;
        });
        response.on('end', function () {
                console.log(totalData.length);
                console.log(totalData)
        });*/
        response.pipe(bl(function (err, data) {
                if (err)
                        return console.error(err);
                data = data.toString();
                console.log(data.length);
                console.log(data);
        }));
});
