const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    TaskName: {
        type: String,
        required: [true, 'must provide task name'],
        trim: true
    },
    completed: {
        type: String,
        default: ""
    }
});
const items = mongoose.model('items', schema);
module.exports = items;