const router = require('express').Router();
const Product = require('../models/products');
const Admin = require('../models/admin');

router.post('/post/admin', async (req, res) => {
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password
    });
    try {
        const savedAdmin = await admin.save();
        res.send({savedAdmin});
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/products', async (req, res) => {
    
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