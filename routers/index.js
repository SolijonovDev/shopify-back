const Router = require('express');
const ProductCon = require('../controllers/Product-con.js');

const router = new Router();

router.get('/get-products', ProductCon.getProducts);

module.exports = router;
