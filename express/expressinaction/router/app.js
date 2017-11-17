var express = require('express');
var path = require('path');
var apiRouter = require('./routes/api-router');
var app = express();

var staticPath = path.resolve(__dirname, 'static');
app.use(express.static(staticPath));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.end('my home page');
});

app.listen(3000, () => {
    console.log('app running in 3000');
});
