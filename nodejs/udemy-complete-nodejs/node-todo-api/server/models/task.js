
const moment = require('moment');
const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    title: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    effort: {
        type: Number,
        default: 0.0
    },
    due: {
        type: Date,
        default: moment().utc()
    },
    done: {
        type: Boolean,
        default: false
    },
    tags: {
        type: [String],
        default: []
    }
});

module.exports = {
    Task
};
