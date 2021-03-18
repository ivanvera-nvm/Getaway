const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class ProductCategories extends Model {}

ProductCategories.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize: db, modelName: "products_category" }
);

module.exports = ProductCategories;
