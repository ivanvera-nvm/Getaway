const CartModel = require("../models/Cart")
const OrderModel = require("../models/Order");

const CartController = {
  addProduct(req, res, next) {
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
              .update({productQuantity})
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




};



const deleteProduct = (req, res) => {
  const { id } = req.params;
  Order.destroy({ where: { id } }).then(() => res.sendStatus(200));
};

const bringCart = (req, res) => {};

module.exports = CartController;

/* 

*/
