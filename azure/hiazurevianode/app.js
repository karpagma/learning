var express = require('express');
var app = express();
var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('hello, azure world!');
});

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
