var Promise = require('bluebird');
var readFile = Promise.promisify(require('fs').readFile);

/*fs.readFile(__dirname + '/sample.txt', 'utf-8', (err, contents) => {
    if (err) {
        return console.log(err);
    }

    console.log(contents);
});*/

readFile(__dirname + '/sample.txt', 'utf-8')
  .then(contents => console.log(contents))
  .catch(err => console.log);
