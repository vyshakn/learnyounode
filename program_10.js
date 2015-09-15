var net = require('net');
var d,
        args = process.argv;
var zerofy = function (value) {
         return (value < 10) ? '0' + value : value;
};
var server = net.createServer(function (socket) {
        "use strict";
        var date = new Date();
        socket.end(date.getFullYear() + '-' +
        zerofy(date.getMonth() + 1) + '-' +
        zerofy(date.getDate()) + ' ' +
        zerofy(date.getHours()) + ':' +
        zerofy(date.getMinutes()) + '\n');
});
server.listen(args[args.length - 1]);
