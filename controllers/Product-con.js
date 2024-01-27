const Servises = require('../servise/fetch-products.js');

const ProductCon = {
  async getProducts(req, res) {
    try {
      const data = await Servises.fetchProducts();

      res.status(200).json({ message: 'Ok', data });
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  },
};

module.exports = ProductCon;
