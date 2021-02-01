const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cooling: {
        type: String,
        required: true
    },
    boost: {
        type: String,
        required: true
    },
    memory: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;