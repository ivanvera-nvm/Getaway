const CartModel = require("../models/Cart");
const ProductModel = require("../models/Product");
const OrderModel = require("../models/Order");
const Auth = require("./Auth");

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
    
    CartModel.findOne({ where: { userId, status: "pending" } }).then((cart) => {
      if (!cart) {
        CartModel.create({ userId }).then((cart) => {
          return res.status(200).send(cart);
        });
      }
    return res.send(cart);
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

  // console.log(cart);
  //console.log(Object.keys(cart.__proto__))

  submitCart(req, res, next) {
    //traerte todas las ordenes para ese cartId
    //sumar los subtotales de esas ordenes --> TOTAL --> hacer un map de los subtotales de la orden
    const { cartId } = req.body;
    OrderModel.sum("subtotal", { where: { cartId } })
      .then((result) => {
        CartModel.update({ total: result }, { where: { id: cartId } }).then(
          (cart) => {
            res.send(cart).status(200);
          }
        );
      })
      .catch(next);
  },

  updateStock(req, res, next) {
    //actualiza el stock por producto
    const { productId, productQuantity } = req.body;
    console.log(req.body);
    ProductModel.findOne({ where: { id: productId } })
      .then((product) => {
        console.log(product);
        product.update({ stock: product.stock - productQuantity });
        console.log("PRODUCTO ACTUALIZADO", product);
        res.send("stock actualizado correctamente");
      })
      .catch(next);
  },

  updateCartStatus(req, res, next) {
    //ACTUALICE EL ESTADO DE PENDING A FULLFILED
    const { cartId, email } = req.body;
    CartModel.findOne({ where: { id: cartId } })
      .then((cart) => {
        cart.update({ status: "fulfilled" });
        res.sendStatus(200);
      })
      .then((mailer) => res.send(Auth(email)));
  },

  findFulfilledOrders(req, res, next) {
    const userId = req.params.userId;

    CartModel.findOne({ where: { userId } })
      .then((userCart) => {
        if (userCart.status === "fulfilled") {
          const { id } = userCart;
          OrderModel.findAll({ where: { cartId: id } })
            .then((userOrders) => res.send(userOrders))
            .catch((err) => console.log(err));
        } else {
          res.send("Compra no finalizada");
        }
      })
      .catch((err) => next(err));
  },

  /*
  
  
  checkout(req, res,next) {} */
};

module.exports = CartController;
