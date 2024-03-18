const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/dbConnect');

const app = express();
const PORT = process.env.PORT || 3000;

// routes
const productsRoutes = require('./routes/products');

app.use(express.json());

dbConnect();

app.use('/', (req, res) => {
  res.send('Hello from the server side');
});

app.use('/api', productsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
