const router = require('express').Router();
const Product = require('../models/products');

router.get('/get', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }   catch (error) {
        res.json({ message: err });
    }

});

module.exports = router;