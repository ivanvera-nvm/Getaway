const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class OrderItem extends Model {}

OrderItem.init(
  {
   
 quantity: {
      type: DataTypes.INTEGER,
    },
    subtotal: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize: db, modelName: "orderItem" }
);

module.exports = OrderItem;
