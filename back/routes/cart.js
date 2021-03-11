const express = require("express");
const router = express.Router();
const { addCartItem } = require("../controllers/carro");
const Cart = require("../models/Cart");

router.post("/", (req, res) => {
  const newCart = Cart.create(req.body).then((cart)=> res.status(201).json(cart));
  console.log(newCart);
 
});

module.exports = router;
