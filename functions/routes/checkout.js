const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const { ObjectId } = require('mongodb');
const User = require('../models/User');
const Order = require('../models/Order');

router.post('/checkout', async (req, res) => {
  try {
    const { cart, email } = req.body;
    const products = await Product.find();
    const user = await User.findOne({ email });
    const userId = user._id;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: cart.map((item) => {
        const itemId = new ObjectId(item.id);
        const storeItem = products.find((product) =>
          product._id.equals(itemId)
        );
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.name,
            },
            unit_amount: Math.round(storeItem.price * 100),
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    const order = new Order({
      user: userId,
      items: cart.map((item) => ({
        product: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      total: getTotalAmount(cart),
    });
    await order.save();

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

function getTotalAmount(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

module.exports = router;
