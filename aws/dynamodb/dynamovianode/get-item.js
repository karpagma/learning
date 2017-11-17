var AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

var docClient = new AWS.DynamoDB.DocumentClient();
var params = {
    TableName: 'Movies',
    Key: {
        'year': 2015,
        'title': 'The Big New Movie'
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error('unable to get item. ', JSON.stringify(err, null, 2));
    } else {
        console.log('get item succeeded:', JSON.stringify(data, null, 2));
    }
});
