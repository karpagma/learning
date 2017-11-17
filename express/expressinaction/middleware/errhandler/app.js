var express = require('express');
var path = require('path')
var app = express();

var filePath = path.join(__dirname, 'celine.jpg');
app.use((req, res, next) => {
    res.sendFile(filePath, err => {
        if (err) {
            next(new Error('Error sending file'));
        } 
    });
});

app.use((err, req, res, next) => {
    //res.sendStatus(500);
    res.send({err: 'error'});
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});
