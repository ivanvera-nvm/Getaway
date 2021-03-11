const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Cart extends Model {}

Cart.init(
  {
    status:{
      type:DataTypes.ENUM("pending","fulfilled"),
      defaultValue:"pending"
    }
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart