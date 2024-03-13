import { MercadoPagoConfig, Preference } from "mercadopago";


const client = new MercadoPagoConfig({ accessToken: process.env.YOUR_ACCESS_TOKEN });

const createPreference = async (req, res) => {
    try {
        const body = {
            items: [
                {
                    title: req.body.name,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS"
                },
            ],
            back_urls:{
                success: "https://aktiv-frontend.vercel.app/",
                failure: "https://aktiv-frontend.vercel.app/",
                pending: "https://aktiv-frontend.vercel.app/"
            },
            auto_return: "approved",
        };
        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia",
        })
    }
}

module.exports = createPreference;