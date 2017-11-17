const request = require('supertest');
const app = require('./server').app;

it('should return hello world', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello, world!')
        .end(done);
});
