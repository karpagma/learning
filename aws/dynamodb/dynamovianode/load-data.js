var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

var docClient = new AWS.DynamoDB.DocumentClient();
console.log('importing movies into dynamodb. please wait...');

var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf-8'));
allMovies.forEach(function(movie) {
    var params = {
        TableName: 'Movies',
        Item: {
            'year': movie.year,
            'title': movie.title,
            'info': movie.info
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error('unable to add movie', movie.title, '. error json: ', JSON.stringify(err, null, 2));
        } else {
            console.log('putitem succeeded:', movie.title);
        }
    });
});
