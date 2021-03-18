const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Product_Category extends Model {}

Product_Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
  },
  { sequelize: db, modelName: "product_Category" }
);

module.exports = Product_Category;
