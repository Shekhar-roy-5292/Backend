const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be provided'],
        trim: true,
        maxLength:[20, 'Name must be less than 20 characters'],
    },
    email: {
        type: String,
        required: [true, 'email must be provided'],
        unique: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    // role: {
    //     type: String,
    //     enum: ['admin', 'user'],
    //     default: 'user'
    // },
    // isActive: {
    //     type: Boolean,
    //     default: true
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model('User', userScheme);