const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const app = express();

// * ENDPOINTS
app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct)

const port = 3005;

app.listen(port, ()=> console.log(`You're tuned into port ${port}.`))