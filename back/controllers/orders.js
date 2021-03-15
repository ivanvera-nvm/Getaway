const OrderModel = require("../models/Order");
const CartModel = require("../models/Cart");

const OrderController = {
  findOrders(req, res, next) {
    OrderModel.findAll()
      .then((orders) => res.status(200).json(orders))
      .catch((e) => next(e));
  },

  findUserOrders(req, res, next) {

    const userId = req.params.userId
 

    CartModel.findOne({ where: { userId } })
      .then((userCart) => {
        const { id } = userCart;
        OrderModel.findAll({ where: { cartId: id } })
          .then((userOrders) => res.send(userOrders))
          .catch((err) => console.log(err));
      })
      .catch((err) => next(err));
  },

  deleteCartOrder(req, res, next) {
    const { productId, cartId } = req.body;
    OrderModel.findOne({ where: { productId, cartId } })
      .then((order) => order.destroy())
      .then(() => res.status(200).send("orden deleted"))
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = OrderController;
