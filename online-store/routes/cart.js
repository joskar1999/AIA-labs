const express = require('express');
const router = express.Router();
const Product = require('../models/product');

const calculatePrice = (products) => {
  return parseFloat(products.reduce((a, b) => a + b.price, 0)).toFixed(2);
};

router.get('/cart', (req, res, next) => {
  const products = [];
  Product.findAll({
    attributes: ['id', 'name', 'description', 'price', 'imagePath'],
    where: {
      id: req.session.cart
    }
  }).then(result => {
    result.map(item => products.push(item.get()));
    res.render('cart', {
      products: products,
      price: calculatePrice(products)
    });
  });
});

router.post('/add-to-cart', (req, res, next) => {
  req.session.cart.push(req.body.productId);
  res.redirect('/products');
});

router.post('/remove-from-cart', (req, res, next) => {
  req.session.cart = req.session.cart.filter(item => item !== req.body.productId);
  res.redirect('/cart');
});

router.post('/remove-all', (req, res, next) => {
  req.session.cart = [];
  res.redirect('/products');
});

router.post('/create-order', (req, res, next) => {
  const toOrder = [...new Set(req.session.cart.map(prod => prod))];
  Product.count({
    where: {
      id: toOrder
    }
  }).then(amount => {
    if (amount === toOrder.length) {
      Product.destroy({
        where: {
          id: toOrder
        }
      }).then(() => {
        req.session.cart = [];
        res.render('summary', {
          isSuccess: true
        });
      });
    } else {
      req.session.cart = [];
      res.render('summary', {
        isSuccess: false
      });
    }
  });
});

module.exports = router;