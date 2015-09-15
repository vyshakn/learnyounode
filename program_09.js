var http = require('http'),
        EventEmitter = require('events').EventEmitter,
        bl = require('bl');
var args = process.argv,
        count = 0;
var totalData = {},
        check = new EventEmitter();

check.on('complete', function () {
        count += 1;
        if (count === 3) {
                for (var i = 3; i > 0; i -= 1) {
                        console.log(totalData[args[args.length - i]]);
                }
        }
});

var getUrl = function (url) {
        http.get(url, function (response) {
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
                        totalData[url] = data;
                        check.emit('complete');
                }));
        });
};
for (var i = 1; i < 4; i += 1) {
        getUrl(args[args.length - i]);
}
