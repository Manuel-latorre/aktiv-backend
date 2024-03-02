const { Schema, model} = require("mongoose");


const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Debes ingresar un email'],
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Email invalido'
        ]
    },
    password: {
        type: String,
        required: [true, 'Debes ingresar una contraseña'],
        
    },
    fullname: {
        type: String,
        required: [true, 'Debes ingresar un nombre'],
        minLength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxLength: [30, 'El nombre puede tener maximo 30 caracteres']
    },
    cart: [
        {
          product: {
            type: Schema.Types.ObjectId, // Debes ajustar el tipo según tu modelo de productos
            ref: 'Product', // Ajusta el nombre del modelo de productos
          },
          quantity: Number,
        },
      ],

      // Inicializar el carrito como un arreglo vacío por defecto
    });
    userSchema.pre('save', function (next) {
        if (!this.cart || !Array.isArray(this.cart)) {
            this.cart = [];
        }
        next();
    });

module.exports = model('User', userSchema);