const {model, Schema} = require("mongoose");

const cartSchema = new Schema({
    name: { type: String, required: true, unique: true},
    imageCard: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: { type: Number, required: true},
})

module.exports = model("Cart", cartSchema);