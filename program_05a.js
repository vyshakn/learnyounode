var modl = require('./program_05b.js');


modl(process.argv[process.argv.length - 2],
        process.argv[process.argv.length - 1],
        function(err, data) {
                for (var i = 0; i < data.length; i++) {
                        console.log(data[i]);
        }
});
