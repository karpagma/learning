const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoapp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    db.collection('Todos').insertOne({
        text: 'something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.error('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close()
});
