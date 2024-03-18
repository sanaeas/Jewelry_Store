const { default: mongoose } = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URL;

const dbConnect = () => {
  mongoose
    .connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
};

module.exports = dbConnect;
