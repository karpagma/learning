const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Task} = require('./../models/task');

const seedTasks = [
    {title: 'task 1'},
    {title: 'task 2'}
]

beforeEach(done => {
    Task.remove({}).then(() => {
        return Task.insertMany(seedTasks);
    }).then(() => done());
});

describe('POST /tasks', () => {

    it('should create a new task', done => {
        const title = 'test task';

        request(app)
            .post('/tasks')
            .send({title})
            .expect(200)
            .expect(res => {
                expect(res.body.title).toBe(title)
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                
                Task.find({title}).then(tasks => {
                    expect(tasks.length).toBe(1);
                    expect(tasks[0].title).toBe(title);
                    done();
                }).catch(e => done(e));
            });
    });

    it('should not create task with invalid body data', done => {
        request(app)
            .post('/tasks')
            .send({title: ''})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Task.find().then(tasks => {
                    expect(tasks.length).toBe(seedTasks.length);
                    done();
                }).catch(e => done(e));
            });
    });

});

describe('GET /tasks', () => {
    it('should get all tasks', done => {
        request(app)
            .get('/tasks')
            .expect(200)
            .expect(res => {
                expect(res.body.tasks.length).toBe(seedTasks.length);
            })
            .end(done);
    });
});

