/* eslint-disable no-alert, no-console */

var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/vendor', express.static(__dirname + '/node_modules/'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(3000, () => {
    console.log('App listening in port 3000');
});
