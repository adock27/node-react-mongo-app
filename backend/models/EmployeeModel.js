const mongoose = require('mongoose');


const EmployeeSchema = mongoose.Schema({
    _entityId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('EmployeeModel', EmployeeSchema);