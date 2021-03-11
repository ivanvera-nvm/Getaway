const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Product extends Model {}

Product.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    description: { type: DataTypes.STRING, allowNull: false },
    expiry: {
      type: DataTypes.DATE,
    },
    image : {
      type: DataTypes.STRING
    },
    quantity:{
      type:DataTypes.INTEGER,
      defaultValue:1
    }
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
