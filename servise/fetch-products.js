import fetch from 'node-fetch';

const SHOPIFY_STORE_URL = 'https://cpb-new-developer.myshopify.com';
const SHOPIFY_ACCESS_TOKEN = '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';

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

export const Servises = {
  async fetchProducts() {
    if (cache.has('products')) {
      return cache.get('products');
    }

    const jsonData = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    const data = await jsonData.json();

    return data;
  },
};

Servises.fetchProducts();
