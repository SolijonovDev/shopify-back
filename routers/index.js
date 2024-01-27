import Router from 'express';
import { ProductCon } from '../controllers/Product-con.js';

const router = new Router();

router.get('/get-products', ProductCon.getProducts);

export default router;
