const productsSchema = require('../models/products');

const postProducts = async (req, res) => {
    const product = productsSchema(req.body);
    product.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
}

module.exports = postProducts;