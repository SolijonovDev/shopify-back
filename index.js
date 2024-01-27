import express from 'express';
import cors from 'cors';
import routers from './routers/index.js';

const app = express();
const PORT = 4200;

app.use(cors());
app.use(express.json());

app.use('/api', routers);

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server has started in ${PORT} port`);
  });
};

start();
