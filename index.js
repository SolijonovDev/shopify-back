import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routers from './routers/index.js';

dotenv.config();

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
