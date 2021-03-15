const CartModel = require("../models/Cart");
const Order = require("../models/Order");

const CartController = {
  editProduct(req, res, next) {
    const { productId, cartId, productQuantity } = req.body;
    CartModel.findByPk(cartId)
      .then((cart) => {
        //  console.log(Object.keys(cart.__proto__))
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
            /*    console.log(Object.keys(order.__proto__)) */
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

  //ruta para editar la cantidad de producto en el carrito --> tiene que buscar en la orden el id del product
  /*   updateProduct(req, res, next) {
const {productId, orderId} = req.body
OrderModel.findByPk(productId)
.then((product) => {
    console.log(product)
  //  console.log(Object.keys(product.__proto__))
    res.send("probando update")
})
  } */

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

  deleteProduct(req, res, next) {
    const { productId, cartId } = req.body;
    Order.findOne({ where: { productId, cartId } })
      .then((order) => order.destroy())
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },


  findUserOrders(req, res, next) {
    const userId = req.params.id;

    CartModel.findOne({where: {userId}})
      .then((userCart) => {
        const {id} = userCart;
        Order.findAll({where: {cartId: id}})
          .then((userOrders) => res.send(userOrders))
          .catch((err) => console.log(err));
      })
      .catch((err) => next(err));
  },


};

module.exports = CartController;

/* 

*/
