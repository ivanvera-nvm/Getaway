const OrderModel = require("../models/Order");
const CartModel = require("../models/Cart");
const ProductModel = require("../models/Product");

const OrderController = {
  findOrders(req, res, next) {
    OrderModel.findAll()
      .then((orders) => {
  
        res.send(orders);
  
      })
      .then((orders) => res.status(200).json(orders))
      .catch((e) => next(e));
  },

  findUserOrders(req, res, next) {
    const userId = req.params.userId;

    CartModel.findOne({ where: { userId } })
      .then((userCart) => {
        const { id } = userCart;
        OrderModel.findAll({ where: { cartId: id } })

          .then((userOrders) => res.send(userOrders))
          .catch((err) => console.log(err))
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

 

   findOrderId(req, res, next) {
   // const { userId } = req.params.id;
   //req.body.productId;
   
    const id = req.params.productId


    ProductModel.findAll({ where: { id } })
      .then((product) => res.send(product))
      .catch(next);
  }, 
};

const fn = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    let cart = await CartModel.findOne({ where: { userId } });
    let orders = await cart.getOrders();
    let mapped = orders.map((order) => {
      return order.productId;
    });

    let products = mapped.map((id) => {
      return ProductModel.findOne({ where: { id } });
    });

    const help = (a) => {
      let obj = [...orders];
      for (let i = 0; i < orders.length; i++) {
        obj[i].dataValues.nameProduct = [];
        for (let j = 0; j < a.length; j++) {
          if (orders[i].productId === a[j].id) {
            obj[i].dataValues.nameProduct.push(a[j].name);
          }
        }
      }
      return obj;
    };

    Promise.all(products).then((a) => {
      let obj2 = help(a);
  
      res.send(obj2);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { OrderController, fn };
