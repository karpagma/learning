var AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

var docClient = new AWS.DynamoDB.DocumentClient();
var params = {
    TableName: 'Movies',
    Item: {
        'year': 2015,
        'title': 'The Big New Movie',
        'info': {
            'plot': 'Nothing happens at all.',
            'rating': 0
        }
    }
};

console.log('adding a new item...');
docClient.put(params, function(err, data) {
    if (err) {
        console.error('unable to add item. ', JSON.stringify(err, null, 2));
    } else {
        console.log('added item', JSON.stringify(data, null, 2));
    }
});
