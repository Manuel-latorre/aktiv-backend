const mongoose = require("mongoose")
const express = require('express')
const cors = require("cors");
const mercadopago = require('mercadopago')

require("dotenv").config();

const controllers = require('./controllers')

const app = express()
const port = process.env.PORT || 8080

//middleware
app.use(cors())
app.use(express.json())

app.post('/products', controllers.postProducts);


/* MERCADO PAGO */

// mercadopago.configure({
//     access_token: process.env.ACCESS_TOKEN,
// })

// app.get("/", function(req, res){
//     res.send("Welcome to api")
// })

// app.post("/create_preference", (req, res) => {
//     let preference = {
//         items: [
//             {
//                 title: req.body.description,
//                 unit_price: Number(req.body.price),
//                 quantity: Number(req.body.quantity),
//             },
//         ],
//         back_urls: {
//             success: "http://localhost:8080",
//             failure: "http://localhost:8080",
//             pending: "http://localhost:8080",
//         },
//         auto_return: 'approved',
//     };

//     mercadopago.preferences
//     .create(preference)
//     .then((response) => {
//         res.json({ id: response.body.id });
//     })
//     .catch(function (error){
//         console.log(error);
//     })

//     console.log(res);
// })



mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to database'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port))