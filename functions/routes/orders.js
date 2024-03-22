const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const User = require('../models/User');

router.get('/orders', async (req, res) => {
  try {
    const { user } = req.query;
    const userId = await User.findOne({ email: user });
    const orders = await Order.find({ user: userId._id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
