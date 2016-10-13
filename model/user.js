const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId;

const User = mongoose.model('User', {
    email: {type: String, required: true},
    password: {type: String, required: true},
    cvFile: String
});

module.exports = User;
