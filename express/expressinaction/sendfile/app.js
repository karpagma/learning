var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.end('Welcome to my homepage');
});

app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/data.pdf');
});


app.use((req, res) => {
    res.statusCode = 404;
    res.end('404');
});

http.createServer(app).listen(3000);
