var pg = require('pg');
var conString = "postgres://postgres:sa@localhost/Chinook";
 
//this initializes a connection pool 
//it will keep idle connections open for a (configurable) 30 seconds 
//and set a limit of 10 (also configurable) 
pg.connect(conString, (err, client, done) => {
  if(err) {
    return console.error('error fetching client from pool', err);
  }

  client.query('SELECT body from artist_docs', function(err, result) {
    //call `done()` to release the client back to the pool 
    done();
 
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].body);
    result.rows.forEach(result => {
        console.log(JSON.stringify(result));
    });
    client.end();
  });
});
