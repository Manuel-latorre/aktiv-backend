const Cart = require('../models/cart');



const putProduct = async (req, res) => {
    const { productId } = req.params;
    const {query} = req.query;
    const body = req.body;

    const searchProd = await Cart.findById(productId);

    if(!query) {
        res.status(404).json({mensaje: "Send a query"});
    } else if (searchProd && query === "add"){
        body.quantity = body.quantity + 1;

        await Cart.findByIdAndUpdate(productId, body, {
            new: true,
        }).then((product) => {
            res.json({
                mensaje: `Product: ${product.name} was updated`,
                product,
            });  
        });
    } else if (searchProd && query === "del") {
        body.quantity = body.quantity - 1;

        await Cart.findByIdAndUpdate(productId, body,  {
            new: true,
        }).then((product) => {
            res.json({
                mensaje: `Product: ${product.name} was updated`,
                product,
            })
        })
    }else{
        res.status(400).json({mensaje: 'Error'});
    }
}

module.exports = putProduct;