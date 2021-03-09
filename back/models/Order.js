const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Order extends Model {}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cartId:{
        type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "order" }
);

module.exports = Order