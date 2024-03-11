const postProducts  = require('./postProduct')
const getProducts = require('./getProducts')
const addProductToCart = require('./addProductToCart')
const getCart = require('./getCart')
const deleteProductCart = require('./deleteProductCart')
const putQuantityCart = require('./putQuantityCart')
const searchByName = require('./searchByName')
const getProductById = require('./getProductById')



module.exports = {
    postProducts,
    getProducts,
    addProductToCart,
    getCart,
    deleteProductCart,
    putQuantityCart,
    searchByName,
    getProductById
};