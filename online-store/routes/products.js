const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/products', (req, res, next) => {
  const products = [];
  Product.findAll({
    attributes: ['id', 'name', 'description', 'price', 'imagePath']
  }).then(result => {
    result.map(item => products.push(item.get()));
    res.render('products', {
      products: products
    });
  });
});

module.exports = router;