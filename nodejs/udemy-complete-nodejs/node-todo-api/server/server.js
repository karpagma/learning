
const moment = require('moment');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Task} = require('./models/task');

const app = express();
app.use(bodyParser.json());

app.post('/tasks', async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title,
            effort: req.body.effort || 0.0,
            due: req.body.due || moment().utc(),
            done: req.body.done || false,
            tags: req.body.tags || []
        });

        const document = await task.save();
        res.send(document);
    } catch(e) {
        res.status(400).send(e);
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send({tasks});
    } catch(e) {
        res.stats(400).send(e);
    }
});

app.get('/tasks/:taskid', async (req, res) => {
    try {
        const taskid = req.params.taskid;
        if (!ObjectID.isValid(taskid)) {
            return res.status(404).send();
        }

        const task = await Task.findById(taskid);
        if (!task) {
            return res.status(404).send();
        }
        res.send({task});
    } catch(e) {
        res.status(400).send();
    }
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};

/*async function addtask(taskval) {
    const task = new Task(taskval);
    return task.save();
}

async function gettask(taskid) {
    const task = Task.find(_id);
}

async function main() {
    try {
        const taskval = {
            title: 'task-1',
            effort: 1.5,
            due: moment().utc(),
            done: false,
            tags: ['Architecture', 'Coding']
        };

        const document = await addtask(taskval);
        console.log(document);


    } catch(e) {
        console.error(e);
    }
}

main();*/