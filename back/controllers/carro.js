const CartModel = require("../models/Cart");
const ProductModel = require("../models/Product");

const CartController = {
  findUserCart(req, res, next) {
    const userId = req.params.userId;

    CartModel.findOne({ where: { userId } })
      .then((userCart) => {
        res.send(userCart);
      })
      .catch((err) => res.send(err));
  },

  findOrCreateCart(req, res, next) {
    const { userId } = req.body;

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
            ProductModel.findByPk(productId).then((product) => {
              console.log(product.price);
              cart
                .createOrder({
                  cartId,
                  productId,
                  subtotal: product.price,
                })

                .then((orden) => res.status(201).send(orden));
            });
          } else {
            ProductModel.findByPk(productId)
              .then((product) => {
                order[0].update({
                  productQuantity: ++order[0].productQuantity,
                  subtotal: order[0].productQuantity * product.price,
                });

                res.status(200).send(order[0]);
              })
              .catch((e) => console.log(e));
          }
        });
      })

      .catch(next);
  },
 
  deleteProduct(req, res, next) {
    const productId = req.params.productId;
    const cartId = req.params.cartId;

    CartModel.findByPk(cartId)
      .then((cart) => {
        //  console.log(Object.keys(cart.__proto__))
        cart
          .getOrders({ where: { productId } })
          .then((order) => {
            if (order[0].productQuantity > 1) {
              ProductModel.findByPk(productId).then((product) => {
                order[0]
                  .update({
                    productQuantity: --order[0].productQuantity,
                    subtotal: order[0].productQuantity * product.price,
                  })
                  .then((orderExist) => {
                    res.status(200).send(orderExist);
                  })
                  .catch((e) => res.status(204).send(e));
              });
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

  submitCart(req, res, next) {

    ///Traer todas las ordenes del Carrito
    ///hacer un total de los precios en las ordenes
    ///actualizar el estado del carrito (pending ====> fullfiled)
    ///actualizar el stock del product

    //chequea cart por cartId --> encuentra el cart y actualiza el valor del total y el estado del carrito
    // console.log(cart);
    //console.log(Object.keys(cart.__proto__))
    const { cartId, productId, orderId } = req.body;
    CartModel.findAll({ where: { orderId } }).then((order) => {
      res.send(order);
    });

    ProductModel.update(
      { id: productId },
      {
        where: {
          stock: productId.stock,
        },
      }
    );
    CartModel.findByPk(cartId)
      .then((cart) => {
        cart.update({
          total: req.body.total,
          status: "fulfilled",
        });
        res.send(cart);
      })
      .catch(next);
  },
};

module.exports = CartController;
