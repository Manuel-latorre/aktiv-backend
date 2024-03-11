const Cart  = require('../models/cart');
const Product = require('../models/products');

const addProductCart  = async (req, res) => {
    const {name, imageCard, price, id_} = req.body;

    const ifExist = await Product.findOne({id_});

    const ifEmpty = name !== "" && imageCard !== "" && price !== "" && id_ !== "";

    const ifStayIncart = await Cart.findById({id_});

    if(!ifExist){
        res.status(400).json({
            mensaje: "This product is not available",
        });
    }else if (ifEmpty && !ifStayIncart){
        const newProdInCart = new Cart({id_, name, imageCard, price, quantity: 1});

        await Product.findByIdAndUpdate(
            ifExist?._id,
            {inCart: true, name, imageCard, price, id_},
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