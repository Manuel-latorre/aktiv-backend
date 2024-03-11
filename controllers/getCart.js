const Cart = require('../models/cart')

const getProductsCart = async (req, res) => {
    const productsCart = await Cart.find();

    if(productsCart) {
        res.json({productsCart});
    }else{
        res.json({mensaje: 'Carrito vacío'})
    }
}

module.exports = getProductsCart;