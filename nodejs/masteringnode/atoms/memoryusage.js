var size = process.argv[2];
var totl = process.argv[3] || 100;
var buff = [];
for (var i=0; i<totl; i++) {
    buff.push(new Buffer(size));
    console.log(process.memoryUsage().heapTotal);
}
