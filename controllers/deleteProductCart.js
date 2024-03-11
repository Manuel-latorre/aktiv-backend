const Cart  = require('../models/cart')
const Product  =require('../models/products')

const deleteProductCart = async (req, res) => {
    const { productId } = req.params;

    const ifStayInCart = await Cart.findById(productId);

    const {name, imageCard, price, _id} = await Product.findOne({
        name: ifStayInCart.name,
    });

    await Cart.findByIdAndDelete(productId);
    await Product.findByIdAndUpdate(
        _id,
        {inCart: false, name, imageCard, price},
        {new: true}
    )

    .then((product) => {
        res.json({
            message: `Product ${product.name} was deleted from cart`,
        });
    })
    .catch((error) => res.json({message: 'There was a error'}));
};

module.exports = deleteProductCart;