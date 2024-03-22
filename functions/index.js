const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');
const checkoutRoute = require('./routes/checkout');
const authRoute = require('./routes/auth');

dbConnect();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// app.use(cors());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/', authRoute);
app.use('/', checkoutRoute);
app.use('/api', productsRoute);
app.use('/api', ordersRoute);
