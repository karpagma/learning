var express = require('express');
var http = require('http');
var app = express();

var EVIL_IP = '3.204.23.133';

app.use((req, res, next) => {
    console.log(req.ip);
    next();
});

app.get('/', (req, res) => {
    res.end('welcome!');
});

http.createServer(app).listen(3000);
