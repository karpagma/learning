var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use(logger('short'));



app.use((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('looks like you didn"t find a static file');
});

app.listen(3000, () => {
    console.log('Express app started on port 8080');
});
