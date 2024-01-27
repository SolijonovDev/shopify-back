require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routers = require('./routers/index.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api', routers);

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server has started in ${PORT} port`);
  });
};

start();
