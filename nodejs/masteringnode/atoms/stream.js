var Readable = require('stream').Readable;
var readable = new Readable();
var count = 0;

readable._read = () => {
    if (++count > 10) {
        return readable.push(null);
    }

    setTimeout(() => {
        readable.push(count + '\n');
    }, 500);
}

readable.pipe(process.stdout);
