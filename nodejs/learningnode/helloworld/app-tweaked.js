const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let name = require('url').parse(req.url, true).query.name;
    if (!name) name = 'world';

    if (name === 'burningbird') {
        const file = 'phoenix.png';
        fs.stat(file, (err, stat) => {
            if (err) {
                console.log(err);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Sorry, Burningbird isn"t around right now \n');
            } else {
                const img = fs.readFile(file, (err, data) => {
                    res.contentType= 'image/png';
                    res.contentLength = stat.size;
                    res.end(data, 'binary');
                });
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Hello ${name}\n`);
    }
}).listen(8124);

console.log('Server running @ port 8124');
