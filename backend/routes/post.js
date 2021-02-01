const router = require('express').Router();
const Product = require('../models/products');

router.post('/post', async (req, res) => {
    
    const product = new Product({
        name: req.body.name,
        cooling: req.body.cooling,
        boost: req.body.boost,
        memory: req.body.memory,
        price: req.body.price
    });
    try {
        const savedProduct = await product.save();
        res.send({savedproduct});
    } catch (err) {
        res.json({ message: err });
    }
    
});


module.exports = router;