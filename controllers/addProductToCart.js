const Cart  = require('../models/cart');
const Product = require('../models/products');

const addProductCart  = async (req, res) => {
    const {name, imageCard, price, _id} = req.body;

    const ifExist = await Product.findById({_id});

    const ifEmpty = name !== "" && imageCard !== "" && price !== "" && _id !== "";

    const ifStayIncart = await Cart.findById({_id});

    if(!ifExist){
        res.status(400).json({
            mensaje: "This product is not available",
        });
    }else if (ifEmpty && !ifStayIncart){
        const newProdInCart = new Cart({name, imageCard, price, _id, quantity: 1});

        await Product.findByIdAndUpdate(
            ifExist?._id,
            {inCart: true, name, imageCard, price, _id},
            {new: true}
        )

        .then((product) => {
            newProdInCart.save();
            res.json({
                mensaje: `Product was added to cart`,
                product,
            });
        })
        .catch((error) => console.log(error));
    } else if(ifStayIncart){
        res.status(400).json({
            mensaje: 'This product is already in the cart'
        });
    }
}

module.exports = addProductCart;