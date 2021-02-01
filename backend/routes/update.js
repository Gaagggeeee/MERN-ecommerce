const router = require('express').Router();
const Product = require('../models/products');

router.patch('/:productid', async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne(
            { _id: req.params.productid },
            { $set: { 
                name: req.body.name, 
                cooling: req.body.cooling,
                boost: req.body.boost,
                memory: req.body.boost,
                price: req.body.price
            } }
        );
        res.json(updatedProduct);
    } catch {
        res.json({ message: err });
    }
});

module.exports = router;