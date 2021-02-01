const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;