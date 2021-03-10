const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Product extends Model {}

Product.init(
  {
  price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    name: { type: DataTypes.STRING, allowNull: false },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    description: { type: DataTypes.STRING, allowNull: false },
    expiry: {
      type: DataTypes.DATE,
    },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
