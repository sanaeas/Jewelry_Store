const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', (req, res) => {
  res.send('Hello from the server side');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
