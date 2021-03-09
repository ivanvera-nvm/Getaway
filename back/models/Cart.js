const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Cart extends Model {}

Cart.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart