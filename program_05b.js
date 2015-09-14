var fs = require('fs');
var path = require('path');

var extList = [],
        data;
var callback;
var listDir = function (dirName, extension, callback) {
        fs.readdir(dirName, function(err, data) {
                if (err) {
                        return callback(err);
                }
                /*for (var i = 0; i < data.length; i++) {
                        var temp = data[i].split('.');
                        if ( temp.length > 1 && temp[temp.length - 1] ===
                        extension) {
                                extList.push(data[i]);
                        }
                }*/
                extList = data.filter(function(file) {
                        return path.extname(file) === '.' + extension;
                });
                callback(null, extList);
        });
}

module.exports = listDir;
