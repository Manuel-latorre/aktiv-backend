const Product  = require('../models/products')

const getProductById = async (req, res) => {
    const { id } = req.params;

    await Product.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

};

module.exports = getProductById;