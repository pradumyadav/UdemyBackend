const express = require('express');
const { addToCart, fetchCartByUser, deleteFromCart } = require('../Controller/cartController');
const router = express.Router();

router.post('/addToCart', addToCart)
      .post('/fetchCartByUser', fetchCartByUser)
      .delete('/:id', deleteFromCart)
module.exports = router;