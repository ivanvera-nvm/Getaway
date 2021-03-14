const Order = require("../models/Order");
const CartModel = require("../models/Cart");

const orderController = {
  findOrders(req, res, next) {
    Order.findAll()
      .then((orders) => res.status(200).json(orders))
      .catch((e) => next(e));
  },

  
};

module.exports = orderController;
