var fs = require('fs');
var list = [];
var extList = [];
fs.readdir(process.argv[process.argv.length - 2], function (err, list) {
     for (var i = 0; i < list.length; i++) {
        //console.log(string.split('\n').length -1);
        var temp = list[i].split('.');
        //console.log(temp);
        if ( temp.length > 1 && temp[temp.length - 1] ===
                 process.argv[process.argv.length - 1]) {
            console.log(list[i]);
        }
    }
    //console.log(list);
});
