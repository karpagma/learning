var fs = require('fs');
var file = './log.txt';
var totalSize = 0;

var writeNext = function(fd) {
    fs.fstat(fd, function(err, stats) {
        var bufferSize = stats.size;
        var remaining = bufferSize - totalSize;
        remaining = remaining < 0 ? 0 : remaining;
        if (remaining) {
            var buffer = new Buffer(remaining);
            fs.read(fd, buffer, 0, remaining, totalSize-1, function(err, data) {
                totalSize = bufferSize;
                var data = buffer.toString();
                data && process.stdout.write(data);
            });
        } else {
            totalSize = bufferSize;
        }
    });
};

var start = function() {
    fs.open(file, 'r', function(err, fd) {
        if (err) {
            return setTimeout(start, 1000);
        }
        writeNext(fd);

        fs.watch(file, function(event, filename) {
            if (event === 'change') {
                writeNext(fd);
            }
        });
    });
};
start();
