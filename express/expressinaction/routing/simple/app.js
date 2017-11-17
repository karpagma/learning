var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.end('Welcome to my homepage');
});

app.get('/about', (req, res) => {
    res.end('Welcome to about page!');
});

app.get('/weather', (req, res) => {
    res.end('The current weather is NICE');
});

app.get('/hello/:who', (req, res) => {
    res.end('Hello ' + req.params.who + '.');
});

app.use((req, res) => {
    res.statusCode = 404;
    res.end('404');
});

http.createServer(app).listen(3000);
