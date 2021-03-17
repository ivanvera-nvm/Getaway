const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Order extends Model {}

Order.init(
  {
    subtotal: {
      type: DataTypes.INTEGER,
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  { sequelize: db, modelName: "order" }
);

//instance method --> updates subtotal
//un método de instancia que chequee que el productId de order sea el mismo que recibe por parámetro y entonces, modifique el campo subtotal, multiplicando el precio del productId x el productQuantity
Order.prototype.updateSubtotal = function (productId) {
  Order.findOne({
    where: {
      productId,
    },
  }).then((product) => {

    subtotal: this.productQuantity * product.price
    console.log(subtotal) 
  })
  
};

module.exports = Order;
