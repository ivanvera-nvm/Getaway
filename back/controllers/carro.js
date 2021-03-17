const CartModel = require("../models/Cart");
const Order = require("../models/Order");

const CartController = {
  findUserCart(req, res, next) {
    const userId = req.params.userId;
    console.log(userId);

    CartModel.findOne({ where: { userId } })
      .then((userCart) => {
        res.send(userCart);
      })
      .catch((err) => res.send(err));
  },

  findOrCreateCart(req, res, next) {
    const { userId, cartId } = req.body;

    CartModel.findOne({ where: { userId } }).then((cart) => {
      if (!cart) {
        CartModel.create({ userId }).then((cart) => {
          return res.status(200).send(cart);
        });
      }
    });
  },

  editProduct(req, res, next) {
    const { productId, cartId, productQuantity } = req.body;

    CartModel.findByPk(cartId)
      .then((cart) => {
        //   console.log(Object.keys(cart.__proto__))
        cart.getOrders({ where: { productId } }).then((order) => {
          if (!order[0]) {
            cart
              .createOrder({
                cartId,
                productId,
                productQuantity,
              })

              .then((orden) => res.status(201).send(orden));
          } else {
            order[0]
              .update({ productQuantity })
              .then((orderExist) => {
                res.status(200).send(orderExist);
              })
              .catch((e) => console.log(e));
          }
        });
      })

      .catch(next);
  },

  addProduct(req, res, next) {
    const { productId, cartId } = req.body;
    CartModel.findByPk(cartId)
      .then((cart) => {
        //  console.log(Object.keys(cart.__proto__))
        cart.getOrders({ where: { productId } }).then((order) => {
          if (!order[0]) {
            cart
              .createOrder({
                cartId,
                productId,
              })

              .then((orden) => res.status(201).send(orden));
          } else {
            order[0]
              .update({ productQuantity: ++order[0].productQuantity })
              .then((orderExist) => {
                res.status(200).send(orderExist);
              })
              .catch((e) => console.log(e));
          }
        });
      })

      .catch(next);
  },
  /*

  Si la orden del producto existe   --> si la cantidad es mayor a 1 , le saco uno. 
                                    --> Si la cantidad es 1 , elimino la orden. 
                                    
  */
  removeProduct(req, res, next) {
    const { productId, cartId } = req.body;
    CartModel.findByPk(cartId)
      .then((cart) => {
        //  console.log(Object.keys(cart.__proto__))
        cart.getOrders({ where: { productId } }).then((order) => {
          if (order[0].productQuantity > 1) {
            order[0]
              .update({ productQuantity: --order[0].productQuantity })
              .then((orderExist) => {
                res.status(200).send(orderExist);
              })
              .catch((e) => console.log(e));
          } else {
            order[0]
              .destroy()
              .then(() => res.status(200).json("Pedido eliminado"));
          }
        });
      })
      .catch(next);
  },

  deleteOrder(req, res, next) {
    const { productId, cartId } = req.body;
    CartModel.findByPk(cartId)
      .then((cart) => {
        //  console.log(Object.keys(cart.__proto__))
        cart
          .getOrders({ where: { productId } })
          .then((order) => {
            if (order[0].productQuantity > 1) {
              order[0]
                .update({ productQuantity: --order[0].productQuantity })
                .then((orderExist) => {
                  res.status(200).send(orderExist);
                })
                .catch((e) => res.status(204).send(e));
            } else {
              order[0]
                .destroy()
                .then(() => res.status(200).json("Pedido eliminado"))
                .catch((err) => res.status(204).send(err));
            }
          })
          .catch(() => res.send("doesn't exist any order for this cart"));
      })
      .catch(next);
  },
};

module.exports = CartController;
