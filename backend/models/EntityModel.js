const mongoose = require('mongoose');


const EntitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('EntityModel', EntitySchema);