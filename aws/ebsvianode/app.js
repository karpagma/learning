var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.end('Hello, ebs world');
});

app.listen(port, function() {
    console.log('app listening in port ' + port);
});
