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

router.get('/:productid', async (req, res) => {
    try {
        const product = await Product.findById(req.params.productid);
        res.json(product);
    } catch (err) {
        res.json({message: err });
    }
});

module.exports = router;