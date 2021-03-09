const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "category" }
);

module.exports = Category