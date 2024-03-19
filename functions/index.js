const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//routes
const productsRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());

dbConnect();

app.use('/api', productsRoutes);

app.use('/api', authRoutes);

app.use('/', (req, res) => {
  res.send('Hello from the server side');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
