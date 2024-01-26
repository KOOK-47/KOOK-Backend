const moogoose = require('mongoose');

const Schema = moogoose.Schema;



const User_Schema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['private_chef', 'individual', 'catering_business'],
        required: true
    },
    createAt : {
        type: Date,
        default: Date.now
    },
    lastUpdateAt : {
        type: Date,
        default: Date.now
    },
});


module.exports = moogoose.model('users', User_Schema); 