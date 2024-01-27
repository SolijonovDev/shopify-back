require('dotenv').config();
const axios = require('axios');

const { SHOPIFY_STORE_URL, SHOPIFY_ACCESS_TOKEN } = process.env;

// Shopify GraphQL endpoint
const graphqlEndpoint = `${SHOPIFY_STORE_URL}/admin/api/2023-01/graphql.json`;

// GraphQL query to fetch products
const query = `
  {
    products(first: 5) {
      edges {
        node {
          id,
          bodyHtml,
          images(first:1){
            nodes {
             src
            }
          }
        }
      }
    }
  }
`;

const cache = new Map();

const Servises = {
  async fetchProducts() {
    if (cache.has('products')) {
      return cache.get('products');
    }

    const { data } = await axios.post(graphqlEndpoint, JSON.stringify({ query }), {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
      },
    });

    return data.data;
  },
};

Servises.fetchProducts();

module.exports = Servises;
