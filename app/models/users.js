const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
}, { 
    timestamps: true,
    versionKey: false
});


module.exports = mongoose.model('User', UserSchema);