const { Model, DataTypes, ENUM } = require("sequelize");
const db = require("../config/index");

class Cart extends Model {}

Cart.init(
  {
    status: {
      type: DataTypes.ENUM("pending", "fulfilled"),
      defaultValue: "pending",
    },
    total: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
