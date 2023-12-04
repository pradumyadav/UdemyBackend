const express = require('express');
const { deleteFromCart, cartFind, addToCart } = require('../Controller/cartController');
const router = express.Router();

router.post('/addToCart',addToCart)
      .get("/cartfind",cartFind)
      .delete('/:id', deleteFromCart)
      
module.exports = router;
