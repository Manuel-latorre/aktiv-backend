const {model, Schema}  = require("mongoose")

const productsSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: {type: Array, require: true},
    stock: { type: Number, required: true },
    inCart: {type: Boolean, default: false},
    imageCard: { type: String, required: true },
    image1:{ type: String, required:true },
    image2:{ type: String, required:true },
    image3:{ type: String, required:true },
    color: { type: String, required: true },
    description: { type: String, required: true },
    category: {type: String, require: true},
    subcategory: {type: String, require: true},
})

module.exports = model('Product', productsSchema);