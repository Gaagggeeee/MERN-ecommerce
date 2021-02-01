const router = require('express').Router();
const Product = require('../models/products');

router.delete('/:productid', async (req, res) => {
    try {
        const removedProduct = await Product.remove({_id: req.params.productid });
        res.json(removedProduct);
    } catch (err) {
        res.json({ message: err });
    }
    

});

module.exports = router;